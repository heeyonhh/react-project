import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux';

import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
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
import OAuthHandler from './route/Oauth';
import Profile from './route/Profile';
import ProductList from './route/ProductList';
import Detail from './route/Detail';
import Cart from './route/Cart';
import Order from './route/Order';

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
  let [isLoading, setIsLoading] = useState(true);

  // 컴포넌트 마운트될때 로딩 상태를 변경(로딩 화면), 일정 시간 뒤 로딩 종료
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // 로딩 종료
    }, 1500); // 로딩 시간

    // 컴포넌트 언마운트되면 타임아웃 클리어 메모리 누수 방지
    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return (
      <div className="loading_screen">
        <p className='loading_logo'>
          plato<br />coffee</p>
      </div>
    );
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />

          {/* header (상단 영역) */}
          <Grid item xs={12}>
            <Box className='header'>
              <p className='logo'
                onClick={() => { navigate('/') }}>
                plato<br />coffee</p>
              <Box className='header_r'>
                <Avatar className='login'
                  src="/broken-image.jpg"
                  onClick={() => { navigate('/login') }} />
              </Box>
            </Box>

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path="/oauth" element={<OAuthHandler />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/detail/:id" element={<Detail />} />
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
                <BottomNavigationAction label="커피오더" icon={<CoffeeRoundedIcon />} onClick={() => { navigate('/productlist') }} />
                <BottomNavigationAction label="장바구니" icon={<ShoppingCartIcon />} onClick={() => { navigate('/cart') }} />
              </BottomNavigation>
            </Box>

          </Grid>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;