import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#20232a',
    padding: '1rem',
    color: '#61dafb',
  };

  const navStyle = {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/" style={linkStyle}>Dashboard</Link></li>
          <li><Link to="/subscription" style={linkStyle}>Subscription</Link></li>
          <li><Link to="/billing" style={linkStyle}>Billing</Link></li>
          <li><Link to="/support" style={linkStyle}>Support</Link></li>
          <li><Link to="/register" style={linkStyle}>Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
