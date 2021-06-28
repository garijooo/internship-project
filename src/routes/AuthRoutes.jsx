import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../views/Login/Login';
import SignUp from '../views/SignUp/SignUp';
import PasswordUpdate from '../views/PasswordUpdate/PasswordUpdate';
import PasswordReset from '../views/PasswordReset/PasswordReset';

const AuthRoutes = () => (
  <>
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={SignUp} />
    <Route exact path="/auth/password/update/:resetToken" component={PasswordUpdate} />
    <Route exact path="/auth/password/reset" component={PasswordReset} />
  </>
);

export default AuthRoutes;
