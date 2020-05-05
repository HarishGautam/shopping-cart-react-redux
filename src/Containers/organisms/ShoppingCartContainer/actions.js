import { cartActions } from './constants';

export const incrementQuantity = productId => ({
  type: cartActions.incrementQunatity,
  productId,
});

export const decrementQuantity = productId => ({
  type: cartActions.decrementQunatity,
  productId,
});
export const addInCart = productId => ({
  type: cartActions.addInCart,
  productId,
});
