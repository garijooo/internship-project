import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OptionalMenu.module.css';

const OptionalMenu = () => (
  <div className={styles.menu}>
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.default}>Open Stream details</Link>
    </div>
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.blue}>Open Study plan</Link>
    </div>
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.default}>Paused Stream</Link>
    </div>
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.red}>Delete Stream</Link>
    </div>
  </div>
);

export default OptionalMenu;
