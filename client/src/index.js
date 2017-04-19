import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {AUTH_USER} from './actions/types';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if(token){
  // because we wanna update the state BEFORE it renders the others components.
  // The dispatch method is a property of store
  store.dispatch({type: AUTH_USER});
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes = {routes}>

    </Router>
  </Provider>

  , document.querySelector('.container'));
