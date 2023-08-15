import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import '../App.css';

function Location() {
    const navigate = useNavigate();
    const [map, setMap] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0ab11a1d2a24d584c1cdbfb5c9a608c&libraries=services';
        script.onload = () => {
            const kakao = window.kakao;

            //로드 된후 콜백함수 실행
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321),
                    level: 3,
                };
                const newMap = new kakao.maps.Map(mapContainer, options);
                setMap(newMap);

                const places = new kakao.maps.services.Places();

                const performKeywordSearch = () => {
                    if (!map) return;

                    const input = document.querySelector('.location_input');
                    const keyword = input.value;

                    places.keywordSearch(keyword, (result, status) => {
                        if (status === kakao.maps.services.Status.OK) {
                            map.removeMarkers();

                            for (const place of result) {
                                const marker = new kakao.maps.Marker({
                                    position: new kakao.maps.LatLng(place.y, place.x),
                                });
                                marker.setMap(map);
                            }
                        }
                    });
                };

                const searchButton = document.querySelector('.location_submit');
                searchButton.addEventListener('click', performKeywordSearch);
            });
        };
        document.head.appendChild(script);
    }, [map]);

    return (
        <Grid className='location' item xs={12}>
            <div className='go_home' onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_detail_icon' />
            </div>

            <div className='location_text'>매장 선택</div>

            <input className='location_input' placeholder='매장명을 입력해 주세요.' />
            <button className='location_submit'>매장 검색</button>

            <div className='map_box'>
                <div id='map' className='map' />
            </div>

            <div className='location_comp'>매장 선택 완료</div>
        </Grid>
    );
}

export default Location;