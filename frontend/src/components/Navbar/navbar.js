// Navbar.js

import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="menu">
        <li>Home</li>
      </ul>
      <div className="buttons">
        <button>Login </button>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
