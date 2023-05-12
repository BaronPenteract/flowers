import React from 'react';

import Header from './Header';
import '../blocks/content/content.scss';
import { Outlet } from 'react-router-dom';

export default function Main({ isBurgerActive }) {
  return (
    <>
      <main className={`content ${isBurgerActive ? 'content_disabled' : ''}`}>
        <Header />
        <Outlet />
      </main>
    </>
  );
}
