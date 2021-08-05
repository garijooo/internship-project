import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ActionButton from '../ActionButton';
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
      <ActionButton
        btnStyle="accept-auth"
      >
        {submitTitle}
      </ActionButton>
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
