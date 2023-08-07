import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setmdP } from '../store/store';

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
import { orderdata } from '../components/data';

function Main() {

    let [index, setIndex] = useState(0);
    let handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    let [order, setOrder] = useState(orderdata);

    const dispatch = useDispatch();
    const coffee = useSelector((state) => state.coffee);
    const beverage = useSelector((state) => state.beverage);
    const side = useSelector((state) => state.side);
    const mdP = useSelector((state) => state.mdP);

    // md menu 배열 랜덤
    const shuffleArray = (array) => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    // mdmenu 영역 4개
    useEffect(() => {
        const fetchmdProducts = () => {
            const allProducts = [
                ...coffee,
                ...beverage,
                ...side,
            ];
            const mdProducts = shuffleArray(allProducts).slice(0, 4);
            dispatch(setmdP(mdProducts));
        };
        fetchmdProducts();
    }, []);

    //더보기
    const MoreButtonClick = () => {
        const allProducts = [
            ...coffee,
            ...beverage,
            ...side,
        ];

        const filteredProducts = allProducts.filter(
            (product) => !mdP.some((p) => p.id === product.id)
        );

        const moreProducts = shuffleArray(filteredProducts).slice(0, 2);
        setMoreProducts(moreProducts);

        // 액션 디스패치 Redux mdProducts 연결
        const updatedMdP = [...mdP, ...moreProducts];
        dispatch(setmdP(updatedMdP));
    };

    const [moreProducts, setMoreProducts] = useState([]);

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
                    <p className='username'>지금 플라토 회원이 되시면,<br />다양한 할인 혜택을 드려요.</p>
                    <button>회원가입</button>
                    <button>로그인</button>
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

                <Box className="today_ment">#Today 추천 메뉴</Box>

                {/* md 영역 */}
                {mdP.map((a, i) => (
                    <Link href="" className="p" key={i}>
                        <div className='p_img_wrap'>
                            <img className="p_img" src={`/img/${a}${a.id}.png`} />
                        </div>
                        <div className="p_data_wrap">
                            <h4 className='p_title'>{a.title}</h4>
                            <p className='p_content'>{a.content}</p>
                            <p className='p_price'>{a.price}</p>
                        </div>
                    </Link>
                ))}

                <button className="morebutton"
                    onClick={MoreButtonClick}>더보기</button>
            </Grid>
        </Grid>
    );
};

export default Main;

function moreProducts.map(b, i){
    return (
        <Link href="" className="p" key={i}>
            <div className='p_img_wrap'>
                <img className="p_img" src={`/img/${b}${b.id}.png`} />
            </div>
            <div className="p_data_wrap">
                <h4 className='p_title'>{b.title}</h4>
                <p className='p_content'>{b.content}</p>
                <p className='p_price'>{b.price}</p>
            </div>
        </Link>
    )
}