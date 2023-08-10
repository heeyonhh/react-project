import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../store/store';

import '../App.css';

import Grid from '@mui/material/Grid';

function Detail() {

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

    if (!product) {
        return <div>상품을 준비중입니다.</div>;
    }

    return (
        <Grid className='detail' item xs={12}>

            {/* 이미지 정보 영역 */}
            <div className="detail_data_wrap">
                <div className="detail_img">{product.img}</div>
                <h4 className="detail_title">{product.title}</h4>
                <p className="detail_content">{product.content}</p>
                <p className="detail_explain">{product.explain}</p>
            </div>

            {/* 수량 가격 영역 */}
            <div className="detail_order_box">
                <button className='detail_amount_m' onClick={handleDecrement}> - </button>
                {/* 상품 가격 */}
                <p className='detail_amount'>{quantity}</p>
                <button className='detail_amount_p' onClick={handleIncrement}> + </button>
                <p className="detail_price">{(parseInt(product.price.replace(/[^0-9]/g, '')) * quantity).toLocaleString()}원</p> {/* 숫자로 치환 & 수량에 따라 가격 조정 */}
            </div>

            {/* 주문하기 영역 */}
            <div className='detail_order_wrap'>
                <Link>주문하기</Link>
            </div>

        </Grid>
    );
};

export default Detail;