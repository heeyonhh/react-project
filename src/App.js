import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

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
import QrCodeIcon from '@mui/icons-material/QrCode';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import ApprovalIcon from '@mui/icons-material/Approval';

// 라우트
import Main from './route/Main';
import Code from './route/Code';
import Login from './route/Login';
import ProductList from './route/ProductList';
import Detail from './route/Detail';
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
                <QrCodeIcon />
                <Avatar className='login'
                  src="/broken-image.jpg"
                  onClick={() => { navigate('/login') }} />
              </Box>
            </Box>

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/code" element={<Code />} />
              <Route path='/login' element={<Login />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/detail" element={<Detail />} />
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
                <BottomNavigationAction label="커피오더" icon={<CoffeeRoundedIcon />} onClick={() => { navigate('/order') }} />
                <BottomNavigationAction label="스탬프" icon={<ApprovalIcon />} onClick={() => { navigate('/stamp') }} />
              </BottomNavigation>
            </Box>
            
          </Grid>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;