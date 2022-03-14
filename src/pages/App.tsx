import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from 'router/router';

const App: React.FC = () => {
  const routes = useRoutes();
  return (
    <main className="main">
      <section className="menu">Меню</section>
      <section className="content">
        <BrowserRouter>{routes}</BrowserRouter>
      </section>
    </main>
  );
};

export default App;
