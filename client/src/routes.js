import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/app';
import SignIn from './components/auth/sign_in';
import Signout from './components/auth/sign_out';
import Signup from './components/auth/sign_up';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
export default(
  <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="signin" component={SignIn}></Route>
      <Route path="signout" component={Signout}></Route>
      <Route path="signup" component={Signup}></Route>
      <Route path="feature" component={RequireAuth(Feature)}></Route>
  </Route>
);
