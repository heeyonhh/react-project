import { Routes, Route, useNavigate } from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'

// 아이콘
import QrCodeIcon from '@mui/icons-material/QrCode';

// 라우트
import Main from './route/Main';
import Nav from './route/Nav';
import Plusmenu from './route/Plusmenu';
import Code from './route/Code';
import Event from './route/Event';
import Login from './route/Login';
import Order from './route/Order';
import Stamp from './route/Stamp';

//테마
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function App() {

  let navigate = useNavigate();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />

          {/* 메인페이지 상단고정헤더 로고/바코드/로그인 */}
          <Grid xs={12}>
            <Box className='header'>
              <img src='/img/logo.png' width={'50px'} />

              <Box className='header_r'>
                <QrCodeIcon />
                <Avatar
                  className='login'
                  src="/broken-image.jpg"
                  onClick={() => {
                    navigate('/login')
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/code" element={<Code />} />
            <Route path="/stamp" element={<Stamp />} />
            <Route path="/order" element={<Order />} />
            <Route path="/event" element={<Event />} />
            <Route path='/login' element={<Login />} />

          </Routes>

          <Plusmenu />
          <Nav />

        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;