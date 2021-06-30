import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import avatar from '../../assets/images/avatar.jpg';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import styles from './Header.module.css';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <Link to="/" className={styles.profile}>
        <img src={avatar} alt="avatar" />
        <h3>{`${auth.firstname} ${auth.lastname}`}</h3>
      </Link>
    </header>
  );
};

export default Header;
