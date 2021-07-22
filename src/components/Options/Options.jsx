import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Options.module.css';

const Options = ({ isCurrent, index }) => (
  <ul className={styles.menu}>
    <li className={styles.item}>
      <Link to={`/streams/${index}`} className={styles.default}>Open Stream details</Link>
    </li>
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.blue}>Open Study plan</Link>
    </li>
    {isCurrent && (
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.default}>Paused Stream</Link>
    </li>
    )}
    {isCurrent && (
    <li className={styles.item}>
      <Link to="/streams/current" className={styles.red}>Delete Stream</Link>
    </li>
    )}
  </ul>
);

Options.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  index: PropTypes.number,
};

Options.defaultProps = {
  index: 0,
};

export default Options;
