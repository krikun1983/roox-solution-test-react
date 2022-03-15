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
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('default');

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const responsive = await serviceApi.getUserAll();
      setUsers(responsive);
    } catch (error) {
      console.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const sortUsers = (sort: string) => {
    if (sort === 'city') {
      setUsers(
        [...users].sort((a, b) => a.address.city.localeCompare(b.address.city)),
      );
    } else {
      setUsers(
        [...users].sort((a, b) => a.company.name.localeCompare(b.company.name)),
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (filter === 'default') return;
    sortUsers(filter);
  }, [filter]);

  const routes = useRoutes();
  return (
    <UserContext.Provider value={{users, isLoading}}>
      <BrowserRouter>
        <main className={style.main}>
          <section className={style.main__menu}>
            <BlockMenu setFilter={setFilter} />
          </section>
          <section className={style.main__content}>{routes}</section>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
