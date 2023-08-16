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
        // kakao.auth.login 함수를 사용하여 로그인 처리
        window.Kakao.Auth.login({
            success: function (authObj) {
                console.log('카카오 로그인 성공:', authObj);
                // 성공 콜백에서 필요한 처리를 하세요
            },
            fail: function (error) {
                console.log('카카오 로그인 실패:', error);
                // 실패 콜백에서 에러 처리를 하세요
            },
        });
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