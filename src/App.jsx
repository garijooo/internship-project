import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import PasswordUpdate from './views/PasswordUpdate/PasswordUpdate';
import PasswordReset from './views/PasswordReset/PasswordReset';
import CurrentStreams from './views/CurrentStreams/CurrentStreams';
import './styles/index.css';
import './styles/auth.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CurrentStreams} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={SignUp} />
      <Route exact path="/auth/password/update/:resetToken" component={PasswordUpdate} />
      <Route exact path="/auth/password/reset" component={PasswordReset} />
    </Switch>
  </BrowserRouter>
);
export default App;
