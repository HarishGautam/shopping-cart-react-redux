import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducer';

export const history = createBrowserHistory();
const configureStore = () => {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  );
  return store;
};

export default configureStore;
