import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

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
import { MdOutlinePhonelinkRing } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { RiEBike2Line } from 'react-icons/ri';
import { BiGift } from 'react-icons/bi';

//컴포넌츠
import Mainorder from '../components/Mainorder';
import Product from '../components/Product';
import dataproduct from '../dataproduct';

function Main() {

    let [index, setIndex] = useState(0);
    let handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let navigate = useNavigate();

    let [product, setProduct] = useState(dataproduct);

    return (
        <Container style={{ margin: 0, padding: 0 }}>
            <Grid item xs={12} container>
                <Box className="header_ment">커피 한 잔의 철학🧡<br />플라토 커피</Box>
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
                        <Box className="order_box">
                            <MdOutlinePhonelinkRing />
                            <p className='order_text'>간편주문</p>
                        </Box>
                        <Box className="order_box">
                            <BiStore />
                            <p className='order_text'>매장주문</p>
                        </Box>
                        <Box className="order_box">
                            <RiEBike2Line />
                            <p className='order_text'>배달주문</p>
                        </Box>
                        <Box className="order_box">
                            <BiGift />
                            <p className='order_text'>선물하기</p>
                        </Box>
                    </Box>

                    <Box className='mdmenu'>
                        <p className='today_ment'>#Today 추천 메뉴</p>
                        <Box className="productwrap">
                            {product.map(function (a, i) {
                                return (
                                    <Product product={product[i]} i={i} />
                                )
                            })}
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Main;