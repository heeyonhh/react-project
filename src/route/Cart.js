import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../App.css';
import Grid from '@mui/material/Grid';

function Cart() {

    // detail에서 넘어온 상품 정보 가져오기
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // 수량 업데이트 핸들
    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    // 선택 상품 삭제 핸들
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    // 합계 계산
    const totalAmount = cartItems.reduce((total, item) => {
        const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''));
        return total + (itemPrice * item.quantity);
    }, 0);

    return (
        <Grid className='cart' item xs={12}>
            <div className="cart_name">장바구니 <ShoppingCartIcon /></div>

            <div className="cart_list">주문 상품</div>
            {cartItems.map(item => (
                <div className="cart_data_box" key={item.id}>
                    <div className="cart_data_wrap">
                        <div className='cart_wrap'>
                            <img className="cart_img" src={item.img} alt={item.title} width="80" />
                            <div className="cart_title">{item.title}</div>
                            <button className="cart_delete" onClick={() => handleRemoveItem(item.id)}> X </button>
                        </div>
                        <div className='cart_button_wrap'>
                            <button className="cart_button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}> + </button>
                            <p className='detail_amount'>{item.quantity}</p>
                            <button className="cart_button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}> - </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* 전체 주문하기 영역 */}
            <div className='cart_order_box'>
                <div className='cart_price_wrap'>
                    <div className='cart_price_name'>상품금액</div>
                    <p className="cart_price">{totalAmount.toLocaleString()}원</p>
                </div>
                {/* order 주문 페이지로 정보 넘기기 */}
                <Link to={{ pathname: '/order',
                        search: `?cartItems=${encodeURIComponent(JSON.stringify(cartItems))}&totalAmount=${totalAmount}`, }} className='go_order' >주문하기
                </Link>
            </div>
        </Grid>
    );
}

export default Cart;