import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// 아이콘
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// 라우트
import Main from './route/Main';
import Login from './route/Login';
import Redirect from './route/Redirect';
import Profile from './route/Profile';
import Location from './route/Location';
import ProductList from './route/ProductList';
import Detail from './route/Detail';
import Cart from './route/Cart';
import Order from './route/Order';

import Headerlogin from '../src/atoms/Headerlogin';

//테마
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFAB49',
      contrastText: '#ffffff',
      dark: '#e0e0e0',
      light: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: 'rgba(45,45,45,0.87)',
      secondary: 'rgba(74,74,74,0.54)',
      disabled: 'rgba(74,74,74,0.54)',
      hint: 'rgba(74,74,74,0.54)',
    },
  },
});

function App() {

  let navigate = useNavigate();
  let [value, setValue] = useState(0);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // 비동기적 로딩
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    // 초기 로딩이 진행 중인 동안 로딩 페이지를 렌더링
    return <div className='loading_screen'>
      <div className='loading_logo'>
        platto<br/>
        coffee
      </div>
    </div>;
  }

  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div className='wrap'>
            <div className="App">
              <CssBaseline />

              {/* header (상단 영역) */}
              <Grid item xs={12}>
                <Box className='header'>
                  <p className='logo'
                    onClick={() => { navigate('/') }}>
                    plato<br />coffee</p>
                  <Box className='header_r'>
                    <Headerlogin />
                  </Box>
                </Box>

                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path='/login' element={<Login />} />
                  <Route path="/oauth/callback/kakao" element={<Redirect />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/productlist" element={<ProductList />} />
                  <Route path="/detail/:productId" element={<Detail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/order" element={<Order />} />
                </Routes>

                {/* 하단 nav */}
                <Box className="BottomNav">
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction label="메인" icon={<HomeRoundedIcon />} onClick={() => { navigate('/') }} />
                    <BottomNavigationAction label="메뉴" icon={<CoffeeRoundedIcon />} onClick={() => { navigate('/productlist') }} />
                    <BottomNavigationAction label="장바구니" icon={<ShoppingCartIcon />} onClick={() => { navigate('/cart') }} />
                  </BottomNavigation>
                </Box>

              </Grid>
            </div>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  );
};

export default App;