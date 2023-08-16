import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user_id, nickName, profileImage } = useSelector(state => state.auth);

  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage} alt="프로필" />
    </div>
  );
};

export default Profile;