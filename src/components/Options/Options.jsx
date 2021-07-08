import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Options.module.css';

const Options = ({ path, index }) => (
  <div className={styles.menu}>
    <div className={styles.item}>
      <Link to={`/streams/${index}`} className={styles.default}>Open Stream details</Link>
    </div>
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.blue}>Open Study plan</Link>
    </div>
    {path === 'current' && (
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.default}>Paused Stream</Link>
    </div>
    )}
    {path === 'current' && (
    <div className={styles.item}>
      <Link to="/streams/current" className={styles.red}>Delete Stream</Link>
    </div>
    )}
  </div>
);

Options.propTypes = {
  path: PropTypes.string.isRequired,
  index: PropTypes.number,
};

Options.defaultProps = {
  index: 0,
};

export default Options;
