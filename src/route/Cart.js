import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

//아이콘
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../App.css';
import Grid from '@mui/material/Grid';

function Cart() {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <Grid className='cart' item xs={12}>
            <div className="cart_icon"><ShoppingCartIcon /></div>

            {cartItems.map(item => (
                <div className="cart_data_box">
                    <div className="cart_data_wrap" key={item.id}>
                        <div className="cart_img">{item.img}</div>
                        <h4 className="cart_title">{item.title}</h4>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}> + </button>
                        <p className='detail_amount'>{item.quantity}</p>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}> - </button>
                    </div>
                    <button onClick={() => handleRemoveItem(item.id)}>장바구니 음료 삭제</button>
                </div>
            ))}

            {/* 전체 주문하기 영역 */}
            <div className='cart_order_box'>
                <p className="cart_price">{(parseInt(cartItems.price.replace(/[^0-9]/g, '')) * cartItems.quantity).toLocaleString()}원</p>
                <Link to={`/order`} className='go_order'>주문하기</Link>
            </div>

        </Grid >
    );
}

export default Cart;