import { useLocation, useNavigate } from 'react-router-dom';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Order() {
    const navigate = useNavigate();

    // 사용자가 주문한 상품 정보
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cartItems = JSON.parse(decodeURIComponent(queryParams.get('cartItems')));

    // 주문한 상품들의 총 금액
    const totalAmount = cartItems.reduce((total, item) => {
        const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ''));
        return total + (itemPrice * item.quantity);
    }, 0);

    return (
        <Grid className='pay' item xs={12}>
            <div className="go_cart" onClick={() => { navigate(-1) }} >
                <ArrowCircleLeftIcon className='go_detail_icon' />
            </div>

            <div className="pay_text">주문하기</div>

            <div className="pay_list">주문 상품</div>

            {/* 주문한 상품들을 매핑하여 표시 */}
            {cartItems.map(item => (
                <div key={item.id} className="pay_data_box">
                    <div className="pay_data_wrap">
                        <div className='pay_data'>
                            <img className="pay_img" src={item.img} alt={item.title} width="80" />
                            <div className="pay_title">{item.title}</div>
                            <p className="pay_price">{(parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity).toLocaleString()}원</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className='pay_rq_wrap'>
                <div className="pay_rq_ment">포장 요청사항</div>
                <label>
                    <input type="checkbox" /> 포장
                </label>
                <label>
                    <input type="checkbox" /> 매장
                </label>
                <div className="pay_rq_ment">요청사항</div >
                <input label="요청 사항이 있으면 적어주세요." />
            </div>

            <div className='pay_pay'>
                <div className="pay_way">결제 수단</div>
                <label>
                    <input type="checkbox" /> 신용카드
                </label>
                <label>
                    <input type="checkbox" /> 간편카드 결제
                </label>
            </div>

            <div className='pay_box'>
                <div className='pay_wrap'>
                    <div className='pay_total'>결제 금액</div>
                    <p className="pay_amount">{totalAmount.toLocaleString()}원</p>
                </div>
                <div className='pay_button'>결제하기</div>
            </div>

        </Grid>
    );
}

export default Order;