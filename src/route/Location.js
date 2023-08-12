import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Location() {

    const navigate = useNavigate();

    const new_script = src => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', () => {
                resolve();
            });
            script.addEventListener('error', e => {
                reject(e);
            });
            document.head.appendChild(script);
        });
    };

    useEffect(() => {
        //카카오맵 스크립트 읽어오기 a0ab11a1d2a24d584c1cdbfb5c9a608c
        const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0ab11a1d2a24d584c1cdbfb5c9a608c');

        //스크립트 읽기 완료 후 카카오맵 설정
        my_script.then(() => {
            console.log('script loaded!!!');
            const kakao = window['kakao'];
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
                    level: 3
                };
                const map = new kakao.maps.Map(mapContainer, options); //맵생성
                //마커설정
                const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        });
    }, []);

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

            <div className='map_box'>
                <div id="map" className="map"/>
            </div>

            <div className='location_comp'>매장 선택 완료</div>
        </Grid>
    );
}

export default Location;