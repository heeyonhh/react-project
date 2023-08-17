import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { isLoggedInAtom } from '../atoms/isLoggedInAtom';
import { profileAtom } from '../atoms/profileAtom'

import '../App.css';
import Grid from '@mui/material/Grid';

function Profile() {

  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  //프로필 닉네임, 이미지 얻어오기
  const [profile, setProfile] = useRecoilState(profileAtom);

  //로그아웃 핸들
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

  const handleLogout = async () => {
    if (window.Kakao) {
      try {
        await window.Kakao.Auth.logout();
        window.localStorage.removeItem('access_token');
        // 스토리지 저장소 토큰 제거
        setIsLoggedIn(false);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid item xs={12}>
      {isLoggedIn && (
        <div className="profile_box">
          <h2 className="profile_text">환영합니다. {profile.nickName} 님🧡</h2>
          <img className="profile_img" src={profile.profileImage} alt="프로필 이미지"></img>
          <a href="/" className="profile_home"> Home으로 돌아가기 </a>
          <button className="profile_button" onClick={handleLogout}>로그아웃</button>
        </div>
      )}
    </Grid>
  );
}

export default Profile;