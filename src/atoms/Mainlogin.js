import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInAtom } from './isLoggedInAtom';
import { profileAtom } from '../atoms/profileAtom'

import '../App.css';
import Box from '@mui/material/Box';

function Mainlogin() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  //프로필 닉네임 얻어오기
  const [profile, setProfile] = useRecoilState(profileAtom);

  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URL = 'https://platocoffee.netlify.app/oauth/callback/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  if (isLoggedIn) {
    return (
      <Box className='section_box'>
        <p className='section_ment'>{profile.nickName}님<br />환영합니다.</p>
      </Box>
    );
  } else {
    return (
      <Box className='section_box'>
        <p className='section_ment'>지금 플라토 회원이 되시면,<br />다양한 할인 혜택을 드려요.</p>
        <a href={KAKAO_AUTH_URL} className='section_button'>
          회원가입 / 로그인</a>
      </Box>
    );
  }
}

export default Mainlogin;
