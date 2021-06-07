import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import SignUp from './auth/SignUp';
import PasswordNew from './auth/PasswordNew';
import PasswordReset from './auth/PasswordReset';

import history from '../history';

//styles
import '../styles/index.css';
import '../styles/auth.css';

const App = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/password/new/:resetToken" component={PasswordNew} />
        <Route exact path="/auth/password/reset" component={PasswordReset} />
      </Switch>
    </Router>
  );
}

export default App;