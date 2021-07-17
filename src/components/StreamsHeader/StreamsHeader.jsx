import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './StreamsHeader.module.css';
import ActionButton from '../ActionButton/ActionButton';

const StreamsHeader = () => (
  <header className={styles.header}>
    <div className={styles.upper}>
      <h1 className={styles.title}>Internship Streams</h1>
      <ActionButton title="Add new Stream" />
    </div>
    <div className={styles.links}>
      <NavLink
        to="/streams/current"
        className={styles.link}
        activeClassName={styles.active}
      >
        Current streams
      </NavLink>
      <NavLink
        to="/streams/finished"
        className={styles.link}
        activeClassName={styles.active}
      >
        Finished streams
      </NavLink>
    </div>
  </header>
);

export default StreamsHeader;
