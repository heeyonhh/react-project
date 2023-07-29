//css 주입 순서 변경
import { StyledEngineProvider } from '@mui/material/styles';
// 테마
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
// 글로벌 리셋
import CssBaseline from '@mui/material/CssBaseline';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Carousel from 'react-bootstrap/Carousel';
// 아이콘
import QrCodeIcon from '@mui/icons-material/QrCode';

// 컴포넌츠
import Nav from './components/Nav';
import Plusmenu from './components/Plusmenu';
import Code from './components/Code';
import Event from './components/Event';
import Login from './components/Login';
import Order from './components/Order';
import Stamp from './components/Stamp';

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
  let [index, setIndex] = useState(0);
  let handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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

            <Route path="/" element=
              {
                <Container style={{ margin: 0, padding: 0 }}>
                  <Grid container>

                    {/* 메인 이미지 슬라이드 */}
                    <Grid className='mainslide' item xs={12}>
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                          <img src='/img/slide1.jpg' width={'100%'} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src='/img/slide2.jpg' width={'100%'} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src='/img/slide3.jpg' width={'100%'} />
                        </Carousel.Item>
                      </Carousel>
                    </Grid>

                    <Grid className='section' item xs={12}>
                      <Box className='stampbox'>
                        <p className='username_ment'>김희연 님</p>
                        <Box className='stamp'>

                        </Box>
                        <Box className='coupon'>

                        </Box>
                        <Box className='barcode'>

                        </Box>
                      </Box>

                      <Box className='eventslide'>

                      </Box>

                      <Box className='mdmenu'>
                        <p className='username_ment'>김희연 님을 위한 추천 메뉴</p>
                        <Box className='md'>
                          <img></img>
                          <p>고흥 유자망고 스무디</p>
                        </Box>
                      </Box>

                    </Grid>
                  </Grid>
                </Container>
              } />
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