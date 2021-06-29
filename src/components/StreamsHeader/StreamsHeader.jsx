import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from './StreamsHeader.module.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const StreamsHeader = () => {
  const location = useLocation();
  const linkClass = classNames(styles.link, {
    [styles.active]: location.pathname === '/',
  });
  return (
    <header className={styles.header}>
      <div className={styles.upper}>
        <h1 className={styles.title}>Internship Streams</h1>
        <SubmitButton title="Add new Stream" />
      </div>
      <div className={styles.links}>
        <NavLink to="/streams/current" className={linkClass} activeClassName={styles.active}>
          Current streams
        </NavLink>
        <NavLink to="/streams/finished" className={styles.link} activeClassName={styles.active}>
          Finished streams
        </NavLink>
      </div>
    </header>
  );
};

export default StreamsHeader;
