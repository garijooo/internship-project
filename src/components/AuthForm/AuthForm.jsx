import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.module.css';

const AuthForm = ({
  children,
  onSubmitHandler,
  submitTitle,
}) => (
  <form onSubmit={onSubmitHandler} className={styles.form}>
    {children}
    <input type="submit" value={submitTitle} />
  </form>
);

AuthForm.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onSubmitHandler: PropTypes.func,
  submitTitle: PropTypes.string,
};

AuthForm.defaultProps = {
  children: null,
  onSubmitHandler: null,
  submitTitle: null,
};

export default AuthForm;
