import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Header = ( {amountInCart} ) => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="cartIcon" to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
            {amountInCart > 0 && <p>{amountInCart}</p>}
            {amountInCart >= 100 && <p>{"++"}</p>}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
