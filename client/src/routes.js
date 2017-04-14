import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/app';
import SignIn from './components/auth/sign_in';

export default(
  <Route path="/" component={App}>
      <Route path="signin" component={SignIn}></Route>
  </Route>
);
