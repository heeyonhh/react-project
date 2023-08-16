import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import qs from "qs";
import { setAuth } from '../store/authSlice';

function OAuthHandler() {

    const dispatch = useDispatch();

    const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const REDIRECT_URL = 'http://localhost:3000/oauth';
    const KAKAO_CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET;

    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: KAKAO_CLIENT_ID,
            redirect_uri: REDIRECT_URL,
            code: code,
            client_secret: KAKAO_CLIENT_SECRET,
        });
        try {
            // access token 가져오기
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            );
            // 사용자 프로필 가져오기
            const profileData = await window.Kakao.API.request({
                url: '/v2/user/me',
            });

            // 사용자 프로필 데이터를 리덕스 스토어로 디스패치
            dispatch(
                setAuth({
                    kakaoCode: code,
                    user_id: profileData.id,
                    nickName: profileData.properties.nickname,
                    profileImage: profileData.properties.profile_image,
                })
            );

            // 프로필 정보 저장 후 로컬 스토리지에 상태 저장
            const authData = {
                kakaoCode: code,
                user_id: profileData.id,
                nickName: profileData.properties.nickname,
                profileImage: profileData.properties.profile_image,
            };
            localStorage.setItem('authData', JSON.stringify(authData));

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
        window.location.href = '/';
    }, []);

    return null;
}

export default OAuthHandler;