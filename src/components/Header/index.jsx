import React from 'react';
import { useSelector } from 'react-redux';
import HeaderAvatar from '../HeaderAvatar';
import HeaderLogo from '../HeaderLogo';
import styles from './Header.module.css';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <button type="button" className={styles.profile}>
        <HeaderAvatar />
        <span className={styles.title}>{`${auth.firstname} ${auth.lastname}`}</span>
      </button>
    </header>
  );
};

export default Header;
