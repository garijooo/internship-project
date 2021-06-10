import React from 'react';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
import styles from './FormUpperContent.module.css';

const FormUpperContent = ({ type }) => (
  <div className={styles.content}>
    <h2 className={type === 'login' ? styles.selected : styles.title}>
      <Link to="/auth/login">
        Login
      </Link>
    </h2>
    <h2 className={type === 'signup' ? styles.selected : styles.title}>
      <Link to="/auth/signup">
        Sign Up
      </Link>
    </h2>
    <div className={styles.space} />
  </div>
);

FormUpperContent.propTypes = {
  type: PropsTypes.string,
};

FormUpperContent.defaultProps = {
  type: null,
};

export default FormUpperContent;
