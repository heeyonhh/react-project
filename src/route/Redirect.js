import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { isLoggedInAtom } from '../atoms/isLoggedInAtom';
import { profileAtom } from '../atoms/profileAtom';

function Redirect() {
    const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const REDIRECT_URL = 'http://localhost:3000/oauth/callback/kakao';
    const KAKAO_CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET;

    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
    const setProfile = useSetRecoilState(profileAtom);

    const params = new URL(document.URL).searchParams;
    const code = params.get('code');

    const get = async () => {
        const payload = qs.stringify({
            grant_type: 'authorization_code',
            client_id: KAKAO_API_KEY,
            redirect_uri: REDIRECT_URL,
            code: code,
            client_secret: KAKAO_CLIENT_SECRET,
        });
        try {
            // 토큰 얻기
            const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', payload);
            const accessToken = tokenResponse.data.access_token;

            // 프로필 정보 얻기
            const profileResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const profileData = profileResponse.data;

            // 프로필 정보
            setProfile({
                email: profileData.kakao_account.email,
                nickName: profileData.properties.nickname,
                profileImage: profileData.properties.profile_image,
            });
            
            setIsLoggedIn(true);
            navigate('/');

        } catch (err) {
            console.log(err);
            // 로그인 페이지로 이동
            navigate('/login');
        }
    };

    useEffect(() => {
        get();
    }, []);

    return <div>로그인 진행중입니다..</div>;
}

export default Redirect;