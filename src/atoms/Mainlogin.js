import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInAtom } from './isLoggedInAtom';
import { profileAtom } from '../atoms/profileAtom'

import '../App.css';
import Box from '@mui/material/Box';
import { MdOutlinePhonelinkRing } from 'react-icons/md';

function Mainlogin() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  //프로필 닉네임 얻어오기
  const [profile, setProfile] = useRecoilState(profileAtom);

  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;


  if (isLoggedIn) {
    return (
      <Box className="login_order">
        <Box className='section_box'>
          <p className='section_ment'>{profile.nickName}님 환영합니다.<br />지금 바로 플라토를 만나보세요.</p>
        </Box>
        <Link to="/productlist" className="order_box">
          <div className='order_icon'><MdOutlinePhonelinkRing fontSize="large" /></div>
          <p className='order_text'>간편주문</p>
        </Link>
      </Box>
    );
  } else {
    return (
      <Box className="order">
        <Box className='section_box'>
          <p className='section_ment'>지금 플라토 회원이 되시면,<br />다양한 할인 혜택을 드려요.</p>
          <a href={KAKAO_AUTH_URL} className='section_button'>
            카카오<br />간편 로그인</a>
        </Box>
        <Link to="/productlist" className="order_box">
          <div className='order_icon'><MdOutlinePhonelinkRing fontSize="large" /></div>
          <p className='order_text'>간편주문</p>
        </Link>
      </Box>
    );
  }
}

export default Mainlogin;
