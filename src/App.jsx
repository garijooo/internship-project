import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import PasswordUpdate from './views/PasswordUpdate/PasswordUpdate';
import PasswordReset from './views/PasswordReset/PasswordReset';
import Profile from './views/Profile/Profile';
import './styles/index.css';
import './styles/auth.css';

const App = () => (
  <BrowserRouter forceRefresh>
    <Switch>
      <Route exact path="/">
        {localStorage.getItem('auth-token') ? <Profile /> : <Redirect to="/auth/login" />}
      </Route>
      <Route exact path="/auth/login">
        {localStorage.getItem('auth-token') ? <Redirect to="/" /> : <Login /> }
      </Route>
      <Route exact path="/auth/signup" component={SignUp} />
      <Route exact path="/auth/password/update/:resetToken" component={PasswordUpdate} />
      <Route exact path="/auth/password/reset" component={PasswordReset} />
    </Switch>
  </BrowserRouter>
);
export default App;
