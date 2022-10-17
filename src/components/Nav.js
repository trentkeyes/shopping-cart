import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import '../styles/index.css';

const Nav = ({ cartQuantity, openModal }) => {
  return (
    <nav className="nav">
      <div className="container nav__flex">
        <h1 className="nav__title">Rollback Records</h1>
        <ul className="nav__links">
          <li>
            <NavLink
              to="/home"
              exact
              activeClassName="active"
              className="nav__link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="nav__link"
              exact
              activeClassName="active"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <div className="nav__cart" onClick={openModal}>
              <img
                src={'/assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg'}
                alt="Shopping cart icon"
              />
            </div>
          </li>
          <li className="nav__cart-items">
            {cartQuantity && (
              <div className="nav__cart-items-background">{cartQuantity}</div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
