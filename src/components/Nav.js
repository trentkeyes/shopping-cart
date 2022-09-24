import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <h1>Time Capsule Records</h1>
      <ul className="nav__links">
        <li>
          <NavLink
            to="/"
            className={(isActive) => {
              return 'nav__link' + (isActive ? ' selected' : '');
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={(isActive) => {
              return 'nav__link' + (isActive ? ' selected' : '');
            }}
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
