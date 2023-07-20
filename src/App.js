import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// 컴포넌츠
import Nav from './components/Nav';
import Plusmenu from './components/Plusmenu';
import Code from './components/Code';
import Event from './components/Event';
import Login from './components/Login';
import Order from './components/Order';
import Stamp from './components/Stamp';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">

      <Stack className='loginbox'>
        <Avatar
          src="/broken-image.jpg"
          onClick={() => {
            navigate('/login') }}
        />
      </Stack>

      <Routes>

        <Route path="/" element=
          {
            <Container style={{margin:0, padding:0}}>
              <Grid container>
                <Grid className='mainslide' item xs={12}>
                  {/* <Item>이벤트 화면 이미지 슬라이드</Item> */}
                </Grid>
                <Grid className='section' item xs={12}>
                  {/*<Item className='stampbox'>
                    <p className='username_ment'>김희연 님</p>
                    <div className='stamp'>
      
                    </div>
                    <div className='coupon'>
      
                    </div>
                    <div className='barcode'>
      
                    </div>
                  </Item>
      
                  <Item className='eventslide'>
      
                  </Item>
      
                  <Item className='mdmenu'>
                    <p className='username_ment'>김희연 님을 위한 추천 메뉴</p>
                    <div className='md'>
                      <img></img>
                      <p>고흥 유자망고 스무디</p>
                    </div>
                  </Item> */}
                  
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
  );
};

export default App;