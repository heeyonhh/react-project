import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSetRecoilState } from 'recoil';
import { LocationidAtom } from '../atoms/LocationidAtom';

import Grid from '@mui/material/Grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import '../App.css';
import calculateDistance from '../data/calculateDistance';

function Location() {
    const navigate = useNavigate();
    const locationData = useSelector((state) => state.locationData);

    const [closestLocations, setClosestLocations] = useState([]);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        window.kakao.maps.load(() => {
            const geolocation = navigator.geolocation;

            if (geolocation) {
                geolocation.getCurrentPosition((position) => {
                    const userLatitude = position.coords.latitude;
                    const userLongitude = position.coords.longitude;

                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(userLatitude, userLongitude),
                        level: 6,
                    };

                    const closestLocations = locationData
                        .map((location) => ({
                            ...location,
                            distance: calculateDistance(
                                userLatitude,
                                userLongitude,
                                location.latitude,
                                location.longitude
                            ),
                        }))
                        .sort((a, b) => a.distance - b.distance)
                        .slice(0, 5);
                    setClosestLocations(closestLocations);

                    const newMarkers = closestLocations.map((location) =>
                        new window.kakao.maps.Marker({
                            position: new window.kakao.maps.LatLng(
                                location.latitude,
                                location.longitude
                            ),
                        })
                    );
                    setMarkers(newMarkers);

                    const map = new window.kakao.maps.Map(container, options);

                    newMarkers.forEach((marker) => {
                        marker.setMap(map);
                    });
                });
            }
        });
    }, []);

    useEffect(() => {
        closestLocations.forEach((location, index) => {
            if (markers[index]) {
                markers[index].setPosition(
                    new window.kakao.maps.LatLng(location.latitude, location.longitude)
                );
            }
        });
    }, [closestLocations, markers]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('product');

    //선택된 매장 담기
    const [selectedLocation, setSelectedLocation] = useState(null);

    //레코일로 매장 정보 저장
    const setUserLocationId = useSetRecoilState(LocationidAtom);

    const handleLocationId = useCallback(() => {
        if (selectedLocation) {
            setUserLocationId({
                id: selectedLocation.id,
                name: selectedLocation.name
            });
        }
    }, [selectedLocation, setUserLocationId]);

    return (
        <Grid className='location' item xs={12}>
            <div className='go_back_box' onClick={() => navigate(-1)}>
                <ArrowCircleLeftIcon className='go_back_icon' />
            </div>

            <div className='location_text'>매장 선택</div>

            <div className='location_text2'>나와 가까운 매장</div>

            <div className='location_box'>
                {closestLocations.map((location) => (
                    <div
                        className='location_list'
                        key={location.id}
                        onClick={() => setSelectedLocation(location)}>
                        <p className='location_name'>{location.name}</p>
                        <p className='location_address'>{location.address}</p>
                        <p className='location_distance'>{location.distance.toFixed(2)} km</p>
                    </div>
                ))}
            </div>

            {selectedLocation && (
                <div className='location_select'>선택 매장 : {selectedLocation.name}</div>
            )}

            {selectedLocation && (
                <Link to={`/detail/${productId}`} onClick={handleLocationId} className='location_select_text'>
                    매장 선택 완료
                </Link>
            )}

            <div id='map' style={{ width: '100%', height: '150px' }} />
        </Grid>
    );
}

export default Location;