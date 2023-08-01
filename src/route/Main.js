import { useState } from 'react';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Carousel from 'react-bootstrap/Carousel';

function Main() {

    let [index, setIndex] = useState(0);
    let handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
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
    );
};

export default Main;