/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationLinks.scss';

const NavigationLinks = props => {
  const { productTypeQunatity } = props;
  return (
    <nav className="nav-links">
      <h4 className="heading">REACT REDUX SHOPPING CART</h4>
      <ul className="links">
        <li className="link home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="link cart-link">
          <Link to="/cart">
            <i className="fas fa-shopping-cart" />
            
            {productTypeQunatity}
          </Link>
        </li>
        <li className="link-checkout link">
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};
NavigationLinks.propTypes = {
  productTypeQunatity: PropTypes.number.isRequired,
};

export default NavigationLinks;
