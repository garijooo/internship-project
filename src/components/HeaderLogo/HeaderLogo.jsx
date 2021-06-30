import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => (
  <Link to="/streams/current"><img src={logo} alt="logo" className={styles.logo} /></Link>
);

export default HeaderLogo;
