/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './CartList.scss';

const CartItem = ({
  id,
  quantity,
  incrementQuantity,
  decrementQuantity,
  addInCart,
  isOrdered,
}) => {
  return (
    <div className="cart-row">
      <div className="product-id">{id}</div>
      <div className="quantity">{quantity}</div>
      <div className="edit-button-container">
        <button className="edit-quantity" onClick={() => incrementQuantity(id)}>
          +
        </button>
        <button className="edit-quantity" onClick={() => decrementQuantity(id)}>
          -
        </button>
      </div>
    </div>
  );
};
const CartList = props => {
  const { cartItems, ...others } = props;
  const cartHeading = () => (
    <div className="cart-heading">
      <div className="product-id"> Product ID</div>
      <div className="qunatity"> Quantity</div>
      <div className="edit-button-container">Modify Qunatity</div>
    </div>
  );
  const showCheckoutButton = () => {
    return <div className="" />;
  };
  return (
    <div className="cart-list-wrapper">
      {cartItems.length > 0 ? cartHeading() : null}
      {cartItems.map(item => (
        <CartItem
          key={item.productId}
          id={item.productId}
          quantity={item.quantity}
          {...others}
        />
      ))}
      {cartItems.length > 0 ? showCheckoutButton() : null}
    </div>
  );
};
CartList.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  addInCart: PropTypes.func.isRequired,
  isOrdered: PropTypes.bool.isRequired,
};

export default CartList;
