import { useRecoilValue } from 'recoil';
import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { isLoggedInAtom } from '../atoms/isLoggedInAtom';

function Profile() {
  
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const getProfile = async () => {
    try {
      const data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      setEmail(data.kakao_account.email);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickBtn = () => {
    navigate('/');
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
      {isLoggedIn && (
        <div>
          <h2>환영합니다. {nickName} 님</h2>
          <img src={profileImage}></img>
        </div>
      )}
      <button onClick={() => onClickBtn()}>Home으로 돌아가기</button>
    </Fragment>
  );
}

export default Profile;