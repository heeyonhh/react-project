// 백엔드로 인가코드 넘겨주려면 axios import
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from "@mui/material/Link";
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

                <Button onClick={handleKakaoLogin} data-token={KAKAO_CLIENT_ID}>
                    카카오로 회원가입/로그인
                </Button>


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