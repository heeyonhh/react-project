import { Link } from 'react-router-dom';

import '../App.css';

import Grid from '@mui/material/Grid';

function Detail() {
    return (
        <Grid item xs={12}>

            {/* 이미지 정보 영역 */}
            <div className="detail_data_wrap">
                <div className="detail_img_wrap">
                    <img className="detail_img" src={`/img/coffee${product.id}.png`} alt={product.title} />
                </div>
                <h4 className="detail_title">{product.title}</h4>
                <p className="detail_content">{product.content}</p>
                <p className="detail_explain">{product.explain}</p>
            </div>

            {/* 수량 가격 영역 */}
            <div className="detail_order_box">
                <div className='detail_amount_wrap'>
                    <button className='detail_amount_m'>-</button>
                    <p className='detail_amount'>1</p>
                    <button className='detail_amount_p'>+</button>
                </div>
                <p className="detail_price">{product.price}</p>
            </div>

            {/* 주문하기 영역 */}
            <div className='detail_order_wrap'>
                <Link className="detail_order">주문하기</Link>
            </div>

        </Grid>
    );
};

export default Detail;