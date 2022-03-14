import UsersList from 'components/UsersList';
import {UserContext} from 'context/usersContext';
import React, {useContext} from 'react';
import {MyLoader} from 'UI';
import style from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const context = useContext(UserContext);

  return (
    <div className={style.home}>
      {context.isLoading ? (
        <MyLoader />
      ) : (
        <>
          <h1 className={style.home__heading}>Список пользователей</h1>
          <UsersList users={context.users} />
          <div className={style.home__count}>
            Найдено {context.users.length} пользователей
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
