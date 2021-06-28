import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={() => (
      (localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) ? <Component /> : <Redirect to="/auth/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default PrivateRoute;
