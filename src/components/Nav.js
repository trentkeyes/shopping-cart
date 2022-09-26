import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container nav__flex">
        <h1 className="nav__title">Rollback Records</h1>
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
      </div>
    </nav>
  );
};

export default Nav;
