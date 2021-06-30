import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo-white.png';
import avatar from '../../assets/images/avatar.jpg';
import styles from './Header.module.css';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <Link to="/" className={styles.profile}>
        <img src={avatar} alt="avatar" />
        <h3>{`${auth.firstname} ${auth.lastname}`}</h3>
      </Link>
    </header>
  );
};

export default Header;
