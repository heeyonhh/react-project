import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from 'react-bootstrap/Carousel';

//아이콘
import { BsCupStraw } from 'react-icons/bs';
import { RiCoupon3Line } from 'react-icons/ri';

//컴포넌츠
import Mainorder from '../components/Mainorder';
import mainorderdata from '../components/mainorderdata';
import Product from '../components/Product';
import dataproduct from '../components/dataproduct';

function Main() {

    let [index, setIndex] = useState(0);
    let handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    let navigate = useNavigate();

    let [product, setProduct] = useState(dataproduct);
    let [order, setOrder] = useState(mainorderdata);

    return (
        <Grid item xs={12}>
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

            {/* 로그인하면 유저네임 생기게 */}
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

                {/* 호버 이벤트, 아이콘 크기 */}
                <Box className="order">
                    {order.map(function (a, i){
                        return(
                            <Mainorder order={order[i]} i={i} />
                        )
                    })}
                </Box>

                <Box className='mdmenu'>
                    <p className='today_ment'>#Today 추천 메뉴</p>
                    <Box className="productwrap">
                        {product.map(function(a, i){
                            return(
                                <Product product={product[i]} i={i} />
                            )
                        })}
                    </Box>
                    {/* 플렉스 정렬 수정, 더보기 버튼 */}
                </Box>

            </Grid>
        </Grid>
    );
};

export default Main;