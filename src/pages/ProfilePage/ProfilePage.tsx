import React from 'react';
import style from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
  return (
    <div className={style.profile}>
      <h1 className={style.profile__heading}>Профиль пользователя</h1>
    </div>
  );
};

export default ProfilePage;
