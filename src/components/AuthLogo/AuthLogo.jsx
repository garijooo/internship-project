import React from 'react';
import logo from '../../assets/images/logo-akvelon.png';
import styles from './AuthLogo.module.css';

const AuthLogo = () => (
  <div className={styles.logo}>
    <img src={logo} alt="logo-akvelon" />
  </div>
);

export default AuthLogo;
