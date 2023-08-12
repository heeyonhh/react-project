import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Location() {
    const navigate = useNavigate();
    const locationData = useSelector((state) => state.locationData);

    const mapContainerRef = useRef(null);

    useEffect(() => {
        // Load Kakao Maps script
        const script = document.createElement('script');
        script.async = true;
        script.src =
            '//dapi.kakao.com/v2/maps/sdk.js?appkey=a0ab11a1d2a24d584c1cdbfb5c9a608c&autoload=false';
        document.head.appendChild(script);

        script.onload = () => {
            const container = mapContainerRef.current;
            const mapOptions = {
                center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, mapOptions);

            // Create markers and add to the map
            locationData.forEach((location) => {
                const { latitude, longitude } = location;
                if (latitude && longitude) {
                    const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition,
                    });
                    marker.setMap(map);
                }
            });
        };
    }, [locationData]);

    return (
        <Grid className='location' item xs={12}>
            <div className='go_home' onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_detail_icon' />
            </div>

            <div className='location_text'>매장 선택</div>

            <input className='location_input' placeholder='매장명을 입력해 주세요.' />

            <div className='map'>
                <div className='map_wrap' ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
            </div>

            <div className='location_comp'>매장 선택 완료</div>
        </Grid>
    );
}

export default Location;