import BlockMenu from 'components/BlockMenu/BlockMenu';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from 'router/router';
import style from './App.module.scss';

const App: React.FC = () => {
  const routes = useRoutes();
  return (
    <main className={style.main}>
      <section className={style.main__menu}>
        <BlockMenu />
      </section>
      <section className={style.main__content}>
        <BrowserRouter>{routes}</BrowserRouter>
      </section>
    </main>
  );
};

export default App;
