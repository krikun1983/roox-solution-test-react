import React from 'react';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={style.home}>
      <h1 className={style.home__heading}>Список пользователей</h1>
    </div>
  );
};

export default HomePage;
