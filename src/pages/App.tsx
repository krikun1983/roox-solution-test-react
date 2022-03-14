import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {UserContext} from 'context/usersContext';
import serviceApi from 'serverApi/service-api';
import {useRoutes} from 'router/router';
import BlockMenu from 'components/BlockMenu';
import {User} from 'serverApi/types';
import style from './App.module.scss';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const responsive = await serviceApi.getUserAll();
    setUsers(responsive);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const routes = useRoutes();
  return (
    <UserContext.Provider value={{users}}>
      <main className={style.main}>
        <section className={style.main__menu}>
          <BlockMenu />
        </section>
        <section className={style.main__content}>
          <BrowserRouter>{routes}</BrowserRouter>
        </section>
      </main>
    </UserContext.Provider>
  );
};

export default App;
