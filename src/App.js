import { Routes, Route, useNavigate } from 'react-router-dom'

import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
import Code from './route/Code';
import Event from './route/Event';
import Login from './route/Login';
import Order from './route/Order';
import Stamp from './route/Stamp';

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

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />

          {/* header (상단 영역) */}
          <Grid xs={12}>
            <Box className='header'>
              <p className='logo'
                onClick={() => {navigate('/')}}>
                plato<br/>coffee</p>
              <Box className='header_r'>
                <QrCodeIcon />
                <Avatar className='login'
                  src="/broken-image.jpg"
                  onClick={() => {navigate('/login')}} />
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

          {/* 하단 nav */}
          <Nav />

        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;