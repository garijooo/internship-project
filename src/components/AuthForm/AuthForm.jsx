import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './AuthForm.module.css';

const AuthForm = ({
  children,
  onSubmitHandler,
  submitTitle,
  error,
}) => {
  const errorClass = classNames(styles.error, {
    [styles.hidden]: !error,
  });

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      {children}
      <input type="submit" value={submitTitle} />
      <div className={errorClass}>
        <span>{error}</span>
      </div>
    </form>
  );
};
AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  submitTitle: PropTypes.string.isRequired,
  error: PropTypes.string,
};

AuthForm.defaultProps = {
  error: '',
};

export default AuthForm;
