import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FormBottomContent.module.css';

const FormBottomContent = () => (
  <div className={styles.content}>
    <span>
      Remembered your password?
      <Link to="/auth/login" className={styles.link}>
        Back to Log in
      </Link>
    </span>
  </div>
);

export default FormBottomContent;
