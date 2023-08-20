import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlinePhonelinkRing } from 'react-icons/md';

import Mainlogin from "../atoms/Mainlogin";

function Main() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const products = useSelector((state) => state.productData);

    const [randomProducts, setRandomProducts] = useState([]);

    // 재랜더링 막기
    useEffect(() => {
        const getRandomProducts = (category, count) => {
            const productsByCategory = products.filter(product => product.category === category);
            const randomIndices = new Set();
            while (randomIndices.size < count) {
                const randomIndex = Math.floor(Math.random() * productsByCategory.length);
                randomIndices.add(randomIndex);
            }
            return Array.from(randomIndices).map(index => productsByCategory[index]);
        };

        // 2개씩 랜덤 추천
        const coffeeProducts = getRandomProducts('coffee', 2);
        const beverageProducts = getRandomProducts('beverage', 2);
        const sideProducts = getRandomProducts('side', 2);

        const randomProducts = [...coffeeProducts, ...beverageProducts, ...sideProducts];
        setRandomProducts(randomProducts);
    }, [products]);

    //매장 이미 선택했는지 확인
    const selectedLocationId = useSelector((state) => state.locationId);

    return (
        <Grid item xs={12}>
            <Box className="header_ment">커피 한 잔의 철학🧡<br />플라토 커피</Box>

            <Grid className='mainslide'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src='/img/slide1.jpg' width={'100%'} alt="slide1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/img/slide2.jpg' width={'100%'} alt="slide2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/img/slide3.jpg' width={'100%'} alt="slide3" />
                    </Carousel.Item>
                </Carousel>
            </Grid>

            <Grid className='section' item xs={12}>
                <Mainlogin />

                {/* 주문 영역 */}
                <Box className="order">
                    <Link to="/productlist" className="order_box">
                        <div className='order_icon'><MdOutlinePhonelinkRing fontSize="large" /></div>
                        <p className='order_text'>간편주문</p>
                    </Link>
                </Box>

                {/* md 메뉴 영역 */}
                <Box className="today_ment">#Today 추천 메뉴</Box>
                <div className="p_wrap">
                    {randomProducts.map((product) => (
                        <Link to={selectedLocationId
                            ? `/detail/${product.id}`
                            : `/location?product=${product.id}`}
                            className="p"
                            key={product.id}>
                            <div className='p_img_wrap'>
                                <img className="p_img" src={product.img} alt={product.title} />
                            </div>
                            <div className="p_data_wrap">
                                <h4 className='p_title'>{product.title}</h4>
                                <p className='p_content'>{product.content}</p>
                                <p className='p_price'>{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Grid>
        </Grid>
    );
}

export default Main;