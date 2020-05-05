import { connect } from 'react-redux';
import ShoppingCart from '../../../Components/organisms/ShoppingCart';
import { incrementQuantity, decrementQuantity, addInCart } from './actions';

const mapDispatchToProps = dispatch => ({
  incrementQuantity: productId => {
    dispatch(incrementQuantity(productId));
  },
  decrementQuantity: productId => dispatch(decrementQuantity(productId)),
  addInCart: productId => dispatch(addInCart(productId)),
});
const mapStateToProps = state => ({
  productList: state.cartState.products,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
