import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import '../App.css';
import calculateDistance from '../data/calculateDistance';

function Location() {

    const navigate = useNavigate();
    const locationData = useSelector((state) => state.locationData);

    //가까운 매장 거리 계산해서 담은것
    const [closestLocations, setClosestLocations] = useState([]);
    // 선택된 매장
    const [selectedLocation, setSelectedLocation] = useState(null);
    //마커
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        window.kakao.maps.load(() => {
            const geolocation = navigator.geolocation;

            if (geolocation) {
                geolocation.getCurrentPosition((position) => {
                    //현재 위치 얻기
                    const userLatitude = position.coords.latitude;
                    const userLongitude = position.coords.longitude;

                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(userLatitude, userLongitude),
                        level: 6
                    };

                    //가까운 매장 불러오기
                    const closestLocations = locationData
                        .map(location => ({
                            ...location,
                            distance: calculateDistance(userLatitude, userLongitude, location.latitude, location.longitude)
                        }))
                        .sort((a, b) => a.distance - b.distance)
                        .slice(0, 5);
                    setClosestLocations(closestLocations);

                    // 마커 생성 및 상태 업데이트
                    const newMarkers = closestLocations.map(location => (
                        new window.kakao.maps.Marker({
                            position: new window.kakao.maps.LatLng(location.latitude, location.longitude)
                        })
                    ));
                    setMarkers(newMarkers);

                    const map = new window.kakao.maps.Map(container, options);

                    newMarkers.forEach(marker => {
                        marker.setMap(map);
                    });
                });
            }
        });
    }, []);

    useEffect(() => {
        // closestLocations 업데이트 시 markers 위치도 업데이트
        closestLocations.forEach((location, index) => {
            if (markers[index]) {
                markers[index].setPosition(new window.kakao.maps.LatLng(location.latitude, location.longitude));
            }
        });
    }, [closestLocations, markers]);

    //useLocation 으로 main,productlist에서 받아온 productid
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get("product");

    //selectedLocation 전달 하기 위한 작업
    const selectedLocationId = selectedLocation ? selectedLocation.id : null;

    // URL 생성
    const url = selectedLocationId
        ? `/detail/${productId}?locationId=${selectedLocationId}`
        : `/detail/${productId}`;
        console.log('Received productId:', productId);
        console.log('Received locationId:', selectedLocationId);

    return (
        <Grid className='location' item xs={12}>
            <div className="go_back_box" onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_back_icon' />
            </div>

            <div className="location_text">매장 선택</div>

            <div className="location_text2">나와 가까운 매장</div>

            <div className='location_box'>
                {closestLocations.map(location => (
                    <div className='location_list'
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}>
                        <p className='location_name'>{location.name}</p>
                        <p className='location_address'>{location.address}</p>
                        <p className='location_distance'>{location.distance.toFixed(2)} km</p>
                    </div>
                ))}
            </div>

            {selectedLocation && (
                <div className='location_select'>
                    {selectedLocation.name}</div>)}

            <Link to={url} className='location_select_text'>
                매장 선택 완료
            </Link>

            <div id="map" style={{ width: '100%', height: '400px' }} />

        </Grid>
    );
}

export default Location;