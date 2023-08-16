import { useNavigate } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import REACT_APP_KAKAO_API_KEY from '../key.env';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
    const navigate = useNavigate();

    // SDK는 한 번만 초기화
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(REACT_APP_KAKAO_API_KEY);
    }

    const handleKakaoLoginSuccess = (response) => {
        // 로그인 성공 처리할 로직
        console.log(response);
        navigate('/');
    };

    const handleKakaoLoginFailure = (error) => {
        //로그인 실패 시 처리할 로직
        console.error(error);
    };

    return (
        // 브레이크 포인트 화면 크기 xs
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

                {/* 카카오로 회원가입/로그인 */}
                <KakaoLogin
                    token={REACT_APP_KAKAO_API_KEY}
                    onSuccess={handleKakaoLoginSuccess}
                    onFailure={handleKakaoLoginFailure}
                    render={({ onClick }) => (
                        <button onClick={onClick}>카카오로 회원가입/로그인</button>
                    )} />

                {/* 이메일 비밀번호 기억 폼 */}
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="로그인상태 유지"
                />

                <Link>비밀번호 찾기</Link>
            </Box>
        </Container>
    );
};

export default Login;