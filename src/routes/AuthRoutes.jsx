import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import PasswordUpdate from '../views/PasswordUpdate';
import PasswordReset from '../views/PasswordReset';

const AuthRoutes = () => (
  <Switch>
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={SignUp} />
    <Route exact path="/auth/password/update/:resetToken" component={PasswordUpdate} />
    <Route exact path="/auth/password/reset" component={PasswordReset} />
    <Redirect from="/auth" to="/auth/login" />
  </Switch>
);

export default AuthRoutes;
