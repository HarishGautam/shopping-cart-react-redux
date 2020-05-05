import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cartReducer from './Containers/organisms/ShoppingCartContainer/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    cartState: cartReducer,
  });
