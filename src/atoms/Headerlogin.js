import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInAtom } from './isLoggedInAtom';

import Avatar from '@mui/material/Avatar';
import '../App.css';

function Headerlogin() {
  let navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

  const handleLogout = () => {
    if (window.Kakao) {
        window.Kakao.Auth.logout();
      }
    window.localStorage.removeItem('access_token'); // 토큰 제거
    setIsLoggedIn(false);
    navigate('/');
  };

  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URL = 'http://localhost:3000/oauth/callback/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  if (isLoggedIn) {
    return (
      <>
        <button onClick={() => navigate('/profile')}>프로필</button>
        <button onClick={handleLogout}>로그아웃</button>
      </>
    );
  } else {
    return (
      <a href={KAKAO_AUTH_URL}>
        <Avatar className='login' src="/broken-image.jpg" />
      </a>
    );
  }
}

export default Headerlogin;