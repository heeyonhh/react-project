import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from './isLoggedInAtom';

import Avatar from '@mui/material/Avatar';
import '../App.css';

function LoggedInStatusChecker() {

  let navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URL = 'http://localhost:3000/oauth/callback/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;


  if (isLoggedIn) {
    return <button onClick={() => { navigate('/profile'); }}>님</button>;
  } else {
    return <a href={KAKAO_AUTH_URL}>
        <Avatar className='login' src="/broken-image.jpg" />
    </a>
}}

export default LoggedInStatusChecker;