import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useRecoilValue } from 'recoil';
import { LocationidAtom } from '../atoms/LocationidAtom'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function ProductList() {

    const navigate = useNavigate();
    const products = useSelector((state) => state.productData);

    // 선택한 탭 값에 대한 상태 설정
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // 선택한 카테고리에 따라 제품 필터링
    const filteredProducts = products.filter(product => {
        if (value === 0) return product.category === 'coffee';
        if (value === 1) return product.category === 'beverage';
        if (value === 2) return product.category === 'side';
        return true;
    });

    //매장 이미 선택했는지 레코일 location 값 확인 링크 다르게
    const Locationid = useRecoilValue(LocationidAtom);

    return (
        <Grid className="pp">
            <div className="go_back_box" onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_back_icon' />
            </div>

            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab className="pp_tab" label="커피" />
                    <Tab className="pp_tab" label="음료" />
                    <Tab className="pp_tab" label="사이드" />
                </Tabs>
            </Box>
            <Box className="p_wrap">
                {filteredProducts.map((product) => (
                    <Link to={Locationid
                        ? `/detail/${product.id}`
                        : `/location?product=${product.id}`}
                        className="p" key={product.id}>
                        <div className='p_img_wrap'>
                            <img className="p_img" src={product.img} alt={product.title} />
                        </div>
                        <div className="p_data_wrap">
                            <h4 className='p_title'>{product.title}</h4>
                            <p className='p_content'>{product.content}</p>
                            <p className='p_price'>{product.price}</p>
                        </div>
                    </Link>
                ))}
            </Box>
        </Grid>
    );
}

export default ProductList;
