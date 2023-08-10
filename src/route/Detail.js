import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../App.css';

import Grid from '@mui/material/Grid';

function Detail() {

    const { id } = useParams();
    const product = useSelector((state) => state.productData.find(product => product.id === parseInt(id)));

    if (!product) {
        // 상품이 존재하지 않는 경우에 대한 처리
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
                <button className='detail_amount_m'>-</button>
                <p className='detail_amount'>1</p>
                <button className='detail_amount_p'>+</button>
                <p className="detail_price">{product.price}</p>
            </div>

            {/* 주문하기 영역 */}
            <div className='detail_order_wrap'>
                <Link>주문하기</Link>
            </div>

        </Grid>
    );
};

export default Detail;