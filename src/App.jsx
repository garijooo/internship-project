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

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) ? <Redirect to="/streams/current" /> : <Redirect to="/auth/login" />}
      </Route>
      <PrivateRoute path="/streams/current" exact component={CurrentStreams} />
      <PrivateRoute path="/streams/finished" exact component={FinishedStreams} />
      <PrivateRoute path="/interns" exact component={Interns} />
      <Route path="/auth">
        {!(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) ? <AuthRoutes /> : <Redirect to="/streams/current" />}
      </Route>
      <Route>
        {!(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) ? <Redirect to="/auth/login" /> : <NotFound />}
      </Route>
    </Switch>
  </BrowserRouter>
);
export default App;
