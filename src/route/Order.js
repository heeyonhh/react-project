import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../App.css';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Order() {
    const navigate = useNavigate();

    // 사용자 주문한 상품 정보
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cartItems = JSON.parse(decodeURIComponent(queryParams.get('cartItems')));

    // 주문한 상품들 총액
    const totalAmount = cartItems.reduce((total, item) => {
        const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''));
        return total + (itemPrice * item.quantity);
    }, 0);

    //체크박스
    const [packagingChecked, setPackagingChecked] = useState(true);
    const [storeChecked, setStoreChecked] = useState(false);
    const [creditCardChecked, setCreditCardChecked] = useState(true);
    const [easyCardChecked, setEasyCardChecked] = useState(false);

    const handlePackagingChange = (event) => {
        setPackagingChecked(event.target.checked);
        setStoreChecked(!event.target.checked);
    };
    const handleStoreChange = (event) => {
        setStoreChecked(event.target.checked);
        setPackagingChecked(!event.target.checked);
    };

    const handleCreditCardChange = (event) => {
        setCreditCardChecked(event.target.checked);
        setEasyCardChecked(!event.target.checked);
    };
    const handleEasyCardChange = (event) => {
        setEasyCardChecked(event.target.checked);
        setCreditCardChecked(!event.target.checked);
    };

    return (
        <Grid className='pay' item xs={12}>
            <div className="go_back_box" onClick={() => { navigate(-1) }} >
                <ArrowCircleLeftIcon className='go_back_icon' />
            </div>

            <div className="pay_text">주문하기</div>

            <div className="pay_list">주문 상품</div>

            {cartItems.map(item => (
                <div key={item.id} className="pay_data_box">
                    <div className='pay_data'>
                        <img className="pay_img" src={item.img} alt={item.title} width="60" />
                        <div className="pay_title">{item.title}</div>
                        <p className='pay_amount'>{item.quantity}개</p>
                        <p className="pay_price">{(parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity).toLocaleString()}원</p>
                    </div>
                </div>
            ))}

            <div className='pay_rq_wrap'>
                <div className="pay_rq_ment">포장 요청사항</div>
                <FormGroup className='check'>
                    <FormControlLabel
                        control={<Checkbox checked={packagingChecked} onChange={handlePackagingChange} />}
                        label="포장"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={storeChecked} onChange={handleStoreChange} />}
                        label="매장"
                    />
                </FormGroup>
                <div className="pay_rq">요청사항</div>
                <input className='rq_input' placeholder="요청 사항이 있으면 적어주세요." />
            </div>

            <div className='pay_pay'>
                <div className="pay_way">결제 수단</div>
                <FormGroup className='pay_check'>
                    <FormControlLabel
                        control={<Checkbox checked={creditCardChecked} onChange={handleCreditCardChange} />}
                        label="신용카드"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={easyCardChecked} onChange={handleEasyCardChange} />}
                        label="간편카드 결제"
                    />
                </FormGroup>
            </div>

            <div className='pay_box'>
                <div className='pay_wrap'>
                    <div className='pay_total'>결제 금액</div>
                    <p className="pay_w">{totalAmount.toLocaleString()}원</p>
                </div>
                <div className='pay_button'>결제하기</div>
            </div>

        </Grid>
    );
}

export default Order;