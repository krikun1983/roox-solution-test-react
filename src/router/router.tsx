import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage, NotFoundPage, ProfilePage} from 'pages';

const publicRoutes = [
  {path: '/', element: HomePage},
  {path: '/profile/:id', element: ProfilePage},
  {path: '*', element: NotFoundPage},
];

export const useRoutes = (): JSX.Element => (
  <Routes>
    {publicRoutes.map(route => (
      <Route path={route.path} element={<route.element />} key={route.path} />
    ))}
  </Routes>
);
