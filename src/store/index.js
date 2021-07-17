import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from './auth/reducer';
import optionsReducer from './options/reducer';

const reducers = combineReducers({
  auth: authReducer,
  options: optionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
