import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStores } from '../store/locationSlice';
import { useNavigate } from 'react-router-dom';

import '../App.css';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Location() {
    const navigate = useNavigate();
    const stores = useSelector(state => state.location.stores);
    const dispatch = useDispatch();

    useEffect(() => {
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

        const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0ab11a1d2a24d584c1cdbfb5c9a608c');

        my_script.then(() => {
            console.log('script loaded!!!');
            const kakao = window['kakao'];
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321),
                    level: 3
                };
                const map = new kakao.maps.Map(mapContainer, options);

                const zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                const places = new kakao.maps.services.Places();

                places.keywordSearch('카페', (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        console.log(result);
                        dispatch(setStores(result));
                    }
                });

                const markerPosition = new kakao.maps.LatLng(places);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        });
    }, [dispatch]);

    return (
        <Grid className='location' item xs={12}>
            <div className='go_home' onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_detail_icon' />
            </div>

            <div className='location_text'>매장 선택</div>

            <input className='location_input' placeholder='매장명을 입력해 주세요.' />
            <button className='location_submit'>매장 검색</button>

            <div className='stores_list'>
                <h2>매장 목록</h2>
                <ul>
                    {stores.map(store => (
                        <li key={store.id}>
                            {store.place_name} - {store.address_name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='map_box'>
                <div id="map" className="map" />
            </div>

            <div className='location_comp'>매장 선택 완료</div>
        </Grid>
    );
}

export default Location;