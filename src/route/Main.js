import { useState } from 'react';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Carousel from 'react-bootstrap/Carousel';

//아이콘
import { BsCupStraw } from 'react-icons/bs';
import { RiCoupon3Line } from 'react-icons/ri';

function Main() {

    let [index, setIndex] = useState(0);
    let handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container style={{ margin: 0, padding: 0 }}>
            <Grid item xs={12} container>
                <Box className="header_ment">커피 한 잔의 철학🧡<br/>플라토 커피</Box>
                {/* 메인 이미지 슬라이드 */}
                <Grid className='mainslide'>
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
                    <Box className='username_ment'>
                        <p className='username'>username</p>님 환영합니다.
                    </Box>
                    <Box className='stampbox'>
                        <Box className='stamp'>
                            <BsCupStraw /> 스탬프 <span>1</span>
                        </Box>|
                        <Box className='coupon'>
                            <RiCoupon3Line /> 쿠폰 <span>1</span>
                        </Box>
                    </Box>

                    <Box className="order">

                    </Box>

                    <Box className='mdmenu'>
                        <p className='today_ment'>Today 추천 메뉴</p>
                        <Box>
                            <Box className='md'>
                                <img></img>
                                <p className='product'>상품1</p>
                            </Box>
                            <Box className='md'>
                                <img></img>
                                <p className='product'>상품2</p>
                            </Box>
                            <Box className='md'>
                                <img></img>
                                <p className='product'>상품3</p>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Main;