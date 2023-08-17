import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { isLoggedInAtom } from '../atoms/isLoggedInAtom';

function Redirect() {
    const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const REDIRECT_URL = 'http://localhost:3000/oauth/callback/kakao';
    const KAKAO_CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET;

    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

    const params = new URL(document.URL).searchParams;
    const code = params.get('code');

    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: 'authorization_code',
            client_id: KAKAO_API_KEY,
            redirect_uri: REDIRECT_URL,
            code: code,
            client_secret: KAKAO_CLIENT_SECRET,
        });
        try {
            const res = await axios.post('https://kauth.kakao.com/oauth/token', payload);
            window.Kakao.init(KAKAO_API_KEY);
            // Kakao Javascript SDK 초기화
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            // access token 설정
            window.localStorage.setItem('access_token', res.data.access_token);
            // 토큰 로컬스토리지 저장 (로그인 유지)
            setIsLoggedIn(true);
            navigate('/');
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    };

    useEffect(() => {
        getToken();    
    }, []);

    return <div>로그인 진행중입니다..</div>
};

export default Redirect;