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
  children: PropTypes.node.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  submitTitle: PropTypes.string.isRequired,
};

export default AuthForm;
