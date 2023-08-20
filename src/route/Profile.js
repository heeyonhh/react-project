import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { isLoggedInAtom } from '../atoms/isLoggedInAtom';
import { profileAtom } from '../atoms/profileAtom';
import { LocationidAtom } from '../atoms/LocationidAtom'

import '../App.css';
import Grid from '@mui/material/Grid';

function Profile() {
  const navigate = useNavigate();

  const profile = useRecoilValue(profileAtom);
  console.log(profile)

  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  //로그아웃할때 매장 선택값도 삭제
  const setILocationid = useSetRecoilState(LocationidAtom);

  const [sdkReady, setSdkReady] = useState(false);
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao) {
      window.Kakao.init(KAKAO_API_KEY, () => {
        setSdkReady(true);
      });
    }
  }, []);

  const handleLogout = () => {
    if (sdkReady && window.Kakao) {
      window.Kakao.Auth.logout();
    }
    window.localStorage.removeItem('access_token');
    // 로그아웃 하면서 스토리지 저장소 토큰 값, 매장 선택값 제거
    setIsLoggedIn(false);
    setILocationid(null);

    navigate('/');
  };

  return (
    <Grid item xs={12}>
      {isLoggedIn && (
        <div className="profile_box">
          <h2 className="profile_text">환영합니다. {profile.nickName} 님🧡</h2>
          <img className="profile_img" src={profile.profileImage} alt="프로필 이미지"></img>
          <a href="/" className="profile_home">
            Home으로 돌아가기
          </a>
          <button className="profile_button" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      )}
    </Grid>
  );
}

export default Profile;