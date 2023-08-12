import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Location() {

   

    return (
        <Grid className='location' item xs={12}>
            <div className='go_home' onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_detail_icon' />
            </div>

            <div className='location_text'>매장 선택</div>

            <input
                className='location_input'
                placeholder='매장명을 입력해 주세요.'
            />
            <button className='location_submit'>
                매장 검색
            </button>

            <div className='map'>
                <div id="map" style={{ width: "500px", height: "400px" }}></div>
            </div>

            <div className='location_comp'>매장 선택 완료</div>
        </Grid>
    );
}

export default Location;