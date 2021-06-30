import React from 'react';
import logo from '../../assets/images/logo-white.png';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => (
  <img src={logo} alt="logo" className={styles.logo} />
);

export default HeaderLogo;
