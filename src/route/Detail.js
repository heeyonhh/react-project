import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../store/store';
import { addToCart } from '../store/cartSlice';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Detail() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => state.productData.find(product => product.id === parseInt(id)));
    //상품 id 연결

    const [quantity, setQuantity] = useState(1); // 수량 상태 추가

    const handleDecrement = () => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(id)); // 수량 감소 액션 호출
            setQuantity(quantity - 1); // 로컬 상태 업데이트
        }
    };

    const handleIncrement = () => {
        dispatch(increaseQuantity(id)); // 수량 증가 액션 호출
        setQuantity(quantity + 1); // 로컬 상태 업데이트
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ id: parseInt(id), quantity, price: product.price, img: product.img, title: product.title }));
    };

    if (!product) {
        return <div>상품을 준비중입니다.</div>;
    }

    return (
        <Grid className='detail' item xs={12}>

            <div className="go_back_box" onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_back_icon'/>
            </div>

            {/* 이미지 정보 영역 */}
            <div className="detail_data_wrap">
                <div className='detail_img_wrap'>
                    <img className="detail_img" src={product.img} alt={product.title} />
                </div>
                <h4 className="detail_title">{product.title}</h4>
                <p className="detail_content">{product.content}</p>
                <p className="detail_explain">{product.explain}</p>
            </div>

            {/* 수량 가격 영역 */}
            <div className="detail_order_box">
                <div className='amout_wrap'>
                    <button className='detail_amount_m' onClick={handleDecrement}> - </button>
                    {/* 상품 수량 */}
                    <p className='detail_amount'>{quantity}</p>
                    <button className='detail_amount_p' onClick={handleIncrement}> + </button>
                </div>
                <p className="detail_price">{(parseInt(product.price.replace(/[^0-9]/g, '')) * quantity).toLocaleString()}원</p> {/* 숫자로 치환 & 수량에 따라 가격 조정 */}
            </div>

            {/* 주문하기 영역 */}
            <div className='detail_order_wrap'>
                <Link to={{
                    pathname: '/cart',
                    search: `?id=${id}&quantity=${quantity}&img=${product.img}&title=${product.title}`,
                }}
                    className='go_cart' onClick={handleAddToCart}>장바구니 담기</Link>
                {/* id 값 & 수량 정보 전달 & 장바구니 추가 */}

                <Link to={{
                    pathname: '/cart',
                    search: `?id=${id}&quantity=${quantity}&img=${product.img}&title=${product.title}`,
                }} className='go_order'>주문하기</Link>
            </div>

        </Grid>
    );
};

export default Detail;