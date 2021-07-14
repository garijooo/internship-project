import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Options.module.css';

const Options = () => (
  <ul className={styles.menu}>
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.default}>Open Stream details</Link>
    </li>
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.blue}>Open Study plan</Link>
    </li>
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.default}>Paused Stream</Link>
    </li>
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.red}>Delete Stream</Link>
    </li>
  </ul>
);

export default Options;
