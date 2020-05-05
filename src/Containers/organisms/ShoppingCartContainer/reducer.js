import { cartActions } from './constants';

const initialState = {
  products: [
    {
      productId: 12345,
      quantity: 0,
      price: 10,
      isOrdered: false,
    },
    {
      productId: 34567,
      quantity: 0,
      price: 10,
      isOrdered: false,
    },
    {
      productId: 35367,
      quantity: 0,
      price: 10,
      isOrdered: false,
    },
    {
      productId: 78987,
      quantity: 0,
      price: 10,
      isOrdered: false,
    },
    {
      productId: 45676,
      quantity: 0,
      price: 10,
      isOrdered: false,
    },
    {
      productId: 45678,
      quantity: 0,
      price: 10,
      isOrdered: false,
    },
  ],
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, productId } = action;
  switch (type) {
    case cartActions.incrementQunatity: {
      const newProducts = [...state.products];
      const index = state.products.findIndex(
        item => item.productId === productId
      );
      const newProduct = { ...newProducts[index] };
      newProduct.quantity += 1;
      Object.assign(newProducts, { [index]: newProduct });
      //   const newArray = Object.assign([...newProducts], { [index]: newProduct });
      return Object.assign({}, { ...state }, { products: newProducts });
      //   const newProduct = state.products[index];
      //   newProduct.quantity += 1;
      //   const newState = { ...state };
      //   newState.products.splice(index, 1, newProduct);
      //   return newState;
    }
    case cartActions.decrementQunatity: {
      const newProducts = [...state.products];
      console.log(newProducts);
      const index = state.products.findIndex(
        item => item.productId === productId
      );
      const newProduct = { ...state.products[index] };
      if (newProduct.quantity > 0) {
        newProduct.quantity -= 1;
      }
      Object.assign(newProducts, { [index]: newProduct });
      return Object.assign({}, state, { products: newProducts });
    }
    case cartActions.addInCart: {
      const newCartList = [...state.products];
      const index = state.products.findIndex(
        item => item.productId === productId
      );
      const cartItem = { ...newCartList[index] };
      cartItem.isOrdered = true;
      Object.assign(newCartList, { [index]: cartItem });
      return Object.assign({}, state, { products: newCartList });
    }
    default:
      return state;
  }
};

export default cartReducer;
