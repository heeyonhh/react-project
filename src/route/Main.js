import { useState } from 'react';
import { Link } from 'react-router-dom';

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
import { orderdata, mddata } from '../components/data';

function Main() {

    let [index, setIndex] = useState(0);
    let handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    let [order, setOrder] = useState(orderdata);

    const [showproduct, setShowproduct] = useState(false);
    const moreproduct = showproduct ? mddata : mddata.slice(0, 4);

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
                        <BsCupStraw /> 스탬프 <span>0</span>
                    </Box>|
                    <Box className='coupon'>
                        <RiCoupon3Line /> 쿠폰 <span>0</span>
                    </Box>
                </Box>

                {/* 주문 영역 */}
                <Box className="order">
                    {order.map(function (order, i) {
                        return (
                            <Link to="/productlist" className="order_box" key={i}>
                                <div className='order_icon'>{order.icon}</div>
                                <p className='order_text'>{order.name}</p>
                            </Link>
                        )
                    })}
                </Box>

                {/* md 영역 */}
                <Box className='mdmenu'>
                    <p className='today_ment'>#Today 추천 메뉴</p>
                    <Box className="productwrap">
                        {moreproduct.map(function (product, i) {
                            return (
                                <Box className='md' key={i}>
                                    <div className='productimgwrap'>
                                        <img className="productimg" src={'/img/product' + (i + 1) + '.png'} />
                                    </div>
                                    <h4 className='title'>{product.title}</h4>
                                    <p className='content'>{product.content}</p>
                                    <p className='price'>{product.price}</p>
                                </Box>
                            )
                        })}
                    </Box>
                    {!showproduct && (
                        <button
                            className='morebutton'
                            onClick={() =>
                                setShowproduct(true)}>추천 메뉴 더보기
                        </button>
                    )}
                </Box>

            </Grid>
        </Grid>
    );
};

export default Main;