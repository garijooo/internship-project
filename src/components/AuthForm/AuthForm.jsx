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
    <input type="submit" value={submitTitle} />
  </form>
);

AuthForm.propTypes = {
  renderFields: PropTypes.func,
  onSubmitHandler: PropTypes.func,
  submitTitle: PropTypes.string,
  renderInnerContent: PropTypes.func,
};

AuthForm.defaultProps = {
  renderFields: undefined,
  onSubmitHandler: null,
  submitTitle: null,
  renderInnerContent: undefined,
};

export default AuthForm;
