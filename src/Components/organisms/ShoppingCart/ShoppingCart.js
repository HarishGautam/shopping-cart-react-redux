/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationLinks from '../../molecules/NavigationLinks';
import CartList from '../../molecules/CartList';
// import CheckoutList from '../../molecules/CheckoutList';

import ProductListing from '../../molecules/ProductListing';

const ShoppingCart = props => {
  const {
    productList,
    incrementQuantity,
    decrementQuantity,
    addInCart,
  } = props;
  const cartItems = productList.filter(item => item.isOrdered);
  const productTypeQunatity = cartItems.length;
  return (
    <div className="">
      <NavigationLinks productTypeQunatity={productTypeQunatity} />

      <Route
        path="/"
        exact
        render={routeProps => <ProductListing {...props} {...routeProps} />}
      />
      <Route
        path="/cart"
        render={routeProps => (
          <CartList
            cartItems={cartItems}
            {...routeProps}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        )}
      />
      {/* <Route
        path="\checkout"
        render={() => (
          <CheckoutList
            checkOutItems={cartItems.filter(item => item.quantity)}
          />
        )}
      /> */}

      {/* <ProductListing
        productList={productList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        addInCart={addInCart}
      /> */}
      {/* <CartList
        cartItems={cartItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <CheckoutList checkOutItems={cartItems.filter(item => item.quantity)} /> */}
    </div>
  );
};
export default ShoppingCart;
ShoppingCart.propTypes = {
  productList: PropTypes.array.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  addInCart: PropTypes.func.isRequired,
};
