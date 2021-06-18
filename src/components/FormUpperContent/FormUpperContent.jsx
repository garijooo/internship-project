import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FormUpperContent.module.css';

const FormUpperContent = () => (
  <div className={styles.content}>
    <NavLink to="/auth/login" className={styles.title} activeClassName={styles.selected}>Login</NavLink>
    <NavLink to="/auth/signup" className={styles.title} activeClassName={styles.selected}>Sign Up</NavLink>
  </div>
);

export default FormUpperContent;
