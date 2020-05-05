/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './ProductListing.scss';

const ProductItem = ({
  id,
  quantity,
  incrementQuantity,
  decrementQuantity,
  addInCart,
  isOrdered,
}) => {
  return (
    <div className="product-item">
      <img
        alt="product-img"
        className="img-container"
        src="https://in.canon/media/image/2018/05/03/642e7bbeae5741e3b872e082626c0151_eos6d-mkii-ef-24-70m-l.png"
      />

      <div className="edit-button-container">
        <button
          className="edit-quantity add-order"
          onClick={() => incrementQuantity(id)}
        >
          +
        </button>
        <div className="product-quantity">{quantity}</div>
        <button
          className="edit-quantity delete-order"
          onClick={() => decrementQuantity(id)}
        >
          -
        </button>
      </div>
      <button
        disabled={!quantity}
        className="add-cart"
        onClick={() => addInCart(id)}
      >
        Add to cart
      </button>
    </div>
  );
};
const ProductListing = props => {
  const { productList, ...others } = props;
  return (
    <div className="product-list-wrapper">
      {productList.map(item => (
        <ProductItem
          key={item.productId}
          id={item.productId}
          isOrdered={item.isOrdered}
          quantity={item.quantity}
          {...others}
        />
      ))}
    </div>
  );
};
ProductListing.propTypes = {
  productList: PropTypes.array.isRequired,
};
ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  addInCart: PropTypes.func.isRequired,
  isOrdered: PropTypes.bool.isRequired,
};

export default ProductListing;
