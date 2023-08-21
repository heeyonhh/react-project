import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInAtom } from './isLoggedInAtom';
import { profileAtom } from '../atoms/profileAtom'

import Avatar from '@mui/material/Avatar';
import '../App.css';

function Headerlogin() {
  let navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  //프로필 사진 얻어오기
  const [profile, setProfile] = useRecoilState(profileAtom);

  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  if (isLoggedIn) {
    return (
      <>
        <Avatar className='login' onClick={() => navigate('/profile')} src={profile.profileImage} />
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