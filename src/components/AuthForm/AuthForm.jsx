import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.module.css';

const AuthForm = ({
  renderFields,
  onSubmitHandler,
  submitTitle,
  renderInnerContent,
}) => (
  <form onSubmit={onSubmitHandler} className={styles.form}>
    {renderFields()}
    {renderInnerContent && renderInnerContent()}
    <input type="submit" onSubmit={onSubmitHandler} value={submitTitle} />
  </form>
);

AuthForm.propTypes = {
  renderFields: PropTypes.element,
  onSubmitHandler: PropTypes.func,
  submitTitle: PropTypes.string,
  renderInnerContent: PropTypes.element,
};

AuthForm.defaultProps = {
  renderFields: null,
  onSubmitHandler: null,
  submitTitle: null,
  renderInnerContent: null,
};

export default AuthForm;
