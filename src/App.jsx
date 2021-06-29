import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CurrentStreams from './views/CurrentStreams/CurrentStreams';
import FinishedStreams from './views/FinishedStreams/FinishedStreams';
import Interns from './views/Interns/Interns';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import PasswordUpdate from './views/PasswordUpdate/PasswordUpdate';
import PasswordReset from './views/PasswordReset/PasswordReset';
import './styles/index.css';
import './styles/auth.css';

const App = () => {
  const authRoute = (path, Component) => (!(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) && <Route exact path={path} component={Component} />);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) ? <Redirect to="/streams/current" /> : <Redirect to="/auth/login" />}
        </Route>
        <PrivateRoute path="/streams/current" exact component={CurrentStreams} />
        <PrivateRoute path="/streams/finished" exact component={FinishedStreams} />
        <PrivateRoute path="/interns" exact component={Interns} />
        {authRoute('/auth/login', Login)}
        {authRoute('/auth/signup', SignUp)}
        {authRoute('/auth/password/update/:resetToken', PasswordUpdate)}
        {authRoute('/auth/password/reset', PasswordReset)}
        <Route>
          {!(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) ? <Redirect to="/auth/login" /> : <NotFound />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
