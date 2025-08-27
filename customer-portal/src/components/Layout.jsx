import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  const mainStyle = {
    padding: '1rem',
  };

  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
