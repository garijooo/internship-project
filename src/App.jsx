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
import AuthRoutes from './routes/AuthRoutes';
import './styles/index.css';
import './styles/auth.css';

const App = () => {
  const isAuthorized = () => (localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token'));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {isAuthorized() ? <Redirect to="/streams/current" /> : <Redirect to="/auth/login" />}
        </Route>
        <PrivateRoute path="/streams/current" exact component={CurrentStreams} />
        <PrivateRoute path="/streams/finished" exact component={FinishedStreams} />
        <PrivateRoute path="/interns" exact component={Interns} />
        <Route path="/auth">
          {!isAuthorized() ? <AuthRoutes /> : <Redirect to="/streams/current" />}
        </Route>
        <Route>
          {!isAuthorized() ? <Redirect to="/auth/login" /> : <NotFound />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
