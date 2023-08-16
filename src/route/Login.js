import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../store/authSlice';
import OAuthHandler from './Oauth';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {

    const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;

    // SDK는 한 번만 초기화
    if (!window.Kakao.isInitialized()) {
        // JavaScript key를 인자로 주고 SDK 초기화
        window.Kakao.init(KAKAO_API_KEY);
    }

    const handleKakaoLogin = () => {
        const REDIRECT_URL = 'http://localhost:3000/oauth';
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

        window.Kakao.Auth.login({
            success: function (authObj) {
                console.log('카카오 로그인 성공:', authObj);
                window.location.href = KAKAO_AUTH_URL;
            },
            fail: function (error) {
                console.log('카카오 로그인 실패:', error);
            },
        });
    };

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        // 로컬 스토리지에서 로그인 상태 가져오기
        const authData = JSON.parse(localStorage.getItem('authData'));
        if (authData) {
            dispatch(setAuth(authData));
        }
    }, []);

    const handleLogout = () => {
        dispatch(setAuth({
            kakaoCode: null,
            user_id: null,
            nickName: null,
            profileImage: null,
        }));
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <LockOutlinedIcon />
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>

                {auth.user_id ? (
                    <div>
                        <p>안녕하세요! {auth.nickName}님</p>
                        <img src={auth.profileImage} alt="Profile" />
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>
                ) : (
                    <Button onClick={handleKakaoLogin} data-token={KAKAO_CLIENT_ID}>
                        카카오로 회원가입/로그인
                    </Button>
                )}
            </Box>
        </Container>
    );
};

export default Login;