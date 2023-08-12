import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {;

// ... (컴포넌트 코드)

const locationData = useSelector(state => state.locationData);

for (const location of locationData) {
  console.log(`Address: ${location.address}`);
  console.log(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
}


    // a0ab11a1d2a24d584c1cdbfb5c9a608c

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
                
                <Link href="">카카오로 회원가입/로그인</Link>

                <Link href="">구글로 회원가입/로그인</Link>

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