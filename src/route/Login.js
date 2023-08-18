import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isLoggedInAtom } from '../atoms/isLoggedInAtom';

function Login() {
    const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const REDIRECT_URL = 'http://localhost:3000/oauth/callback/kakao';
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

    const isLoggedIn = useRecoilValue(isLoggedInAtom);
    const navigate = useNavigate();

    return (
        <div>
            {isLoggedIn ? (
                <>
                    <button onClick={() => navigate('/profile')}>프로필 보기</button>
                </>
            ) : (
                <a href={KAKAO_AUTH_URL}>카카오 계정으로 로그인</a>
            )}
        </div>
    );
}

export default Login;