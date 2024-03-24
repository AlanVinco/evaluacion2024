import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './login-reducer';

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

export default store;