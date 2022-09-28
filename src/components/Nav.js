import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import cartIcon from '../assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';

const Nav = ({ cartQuantity, openModal }) => {
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
          <li>
            <div className="nav__cart" onClick={openModal}>
              <img src={cartIcon} alt="Shopping cart icon" />
            </div>
          </li>
          {cartQuantity && (
            <li className="nav__cart-items">
              <div className="nav__cart-items-background">{cartQuantity}</div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
