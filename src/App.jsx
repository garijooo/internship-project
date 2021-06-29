import React from 'react';
import {
  BrowserRouter, Switch, Route,
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
      <PrivateRoute path="/" exact component={CurrentStreams} />
      <PrivateRoute path="/streams/current" exact component={CurrentStreams} />
      <PrivateRoute path="/streams/finished" exact component={FinishedStreams} />
      <PrivateRoute path="/interns" exact component={Interns} />
      {!(localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) && <AuthRoutes />}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
