import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
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
                <TextField
                    margin="normal"
                    label="Email Address"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    name="password"
                    autoComplete="current-password"
                />
                {/* 이메일 비밀번호 기억 폼 */}
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="이메일/비밀번호 저장"
                />

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    로그인
                </Button>
                <Grid container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Grid item>
                        <Link>비밀번호 찾기</Link>
                    </Grid>
                    <Grid item>
                        <Link>회원가입</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;