import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import fetchCoordinates from '../store/locationstore';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Location() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const locationData = useSelector((state) => state.locationData);

    const handleAddressSubmit = (address) => {
        dispatch(fetchCoordinates(address));
      };

    //카카오맵 api a0ab11a1d2a24d584c1cdbfb5c9a608c
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=a0ab11a1d2a24d584c1cdbfb5c9a608c&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                const container = document.getElementById('kakaoMap');
                const options = {
                    center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 중심 좌표
                    level: 3, // 초기 확대 수준
                };
                const map = new kakao.maps.Map(container, options);

                // 위치 정보를 이용하여 맵에 마커 표시하기
                locationData.forEach((location) => {
                    if (location.latitude && location.longitude) {
                        const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
                        const marker = new kakao.maps.Marker({
                            position: markerPosition,
                        });
                        marker.setMap(map);
                    }
                });
            });
        };

        //언마운트될 때 스크립트 태그 제거 메모리 누수 방지
        return () => {
            document.head.removeChild(script);
        };

    }, [locationData]);

    return (
        <Grid className='location' item xs={12}>
            <div className="go_home" onClick={() => { navigate(-1) }} >
                <ArrowCircleLeftIcon className='go_detail_icon' />
            </div>

            <div className="location_text">매장 선택</div>

            <input className='location_input' placeholder="매장명을 입력해 주세요." />

            <div className="map">
                <div className='map_wrap'>
                    <div id="kakaoMap" className="kakao_map" style={{ width: '100%', height: '400px' }} />
                </div>
            </div>

            <div className="location_comp">매장 선택 완료</div>
        </Grid>
    );
}

export default Location;