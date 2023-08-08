import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from 'react-bootstrap/Carousel';

import { orderdata } from '../components/data';

function Main() {
    //메인 슬라이드
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    let navigate = useNavigate();

    //주문 영역
    const [order] = useState(orderdata);

    //md 메뉴 영역 자료
    const coffeeData = useSelector(state => state.coffee);
    const beverageData = useSelector(state => state.beverage);
    const sideData = useSelector(state => state.side);

    //랜덤으로 2개씩
    const numOfRandomProducts = 2;

    const getRandomProducts = (data) => {
        const selectedProducts = [];
        const randomIndices = [];

        while (randomIndices.length < numOfRandomProducts) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
                const product = { ...data[randomIndex], isSelected: true };
                selectedProducts.push(product);
            }
        }

        return selectedProducts;
    };

    // 재랜딩 막기
    useEffect(() => {
        setRandomCoffee(getRandomProducts(coffeeData));
        setRandomBeverage(getRandomProducts(beverageData));
        setRandomSide(getRandomProducts(sideData));
    }, [coffeeData, beverageData, sideData]);

    const [randomCoffee, setRandomCoffee] = useState([]);
    const [randomBeverage, setRandomBeverage] = useState([]);
    const [randomSide, setRandomSide] = useState([]);

    return (
        <Grid item xs={12}>

            <Box className="header_ment">커피 한 잔의 철학🧡<br />플라토 커피</Box>

            {/* 메인 슬라이드 영역 */}
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
                <Box className='section_box'>
                    <p className='section_ment'>지금 플라토 회원이 되시면,<br />다양한 할인 혜택을 드려요.</p>
                    <button className='section_button'
                    onClick={() => { navigate('/login') }} >
                        회원가입 / 로그인</button>
                </Box>

                {/* 주문 영역 */}
                <Box className="order">
                    {order.map((order, i) => (
                        <Link to="/productlist" className="order_box" key={i}>
                            <div className='order_icon'>{order.icon}</div>
                            <p className='order_text'>{order.name}</p>
                        </Link>
                    ))}
                </Box>

                {/* md 메뉴 영역 */}
                <Box className="today_ment">#Today 추천 메뉴</Box>
                <div className="p_wrap">
                    {randomCoffee.map((product) => (
                        <Link to="#" className="p" key={product.id}>
                            <div className="p_img_wrap">
                                <img className="p_img" src={`/img/coffee${product.id}.png`} alt={product.title} />
                            </div>
                            <div className="p_data_wrap">
                                <h4 className="p_title">{product.title}</h4>
                                <p className="p_content">{product.content}</p>
                                <p className="p_price">{product.price}</p>
                            </div>
                        </Link>
                    ))}
                    {randomBeverage.map((product) => (
                        <Link to="#" className="p" key={product.id}>
                            <div className="p_img_wrap">
                                <img className="p_img" src={`/img/beverage${product.id}.png`} alt={product.title} />
                            </div>
                            <div className="p_data_wrap">
                                <h4 className="p_title">{product.title}</h4>
                                <p className="p_content">{product.content}</p>
                                <p className="p_price">{product.price}</p>
                            </div>
                        </Link>
                    ))}
                    {randomSide.map((product) => (
                        <Link to="#" className="p" key={product.id}>
                            <div className="p_img_wrap">
                                <img className="p_img" src={`/img/side${product.id}.png`} alt={product.title} />
                            </div>
                            <div className="p_data_wrap">
                                <h4 className="p_title">{product.title}</h4>
                                <p className="p_content">{product.content}</p>
                                <p className="p_price">{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Grid>
        </Grid>
    );
}

export default Main;