import React from 'react';
import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ children }) => (
  <ul className={styles.menu}>
    {children}
  </ul>
);

Options.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Options;
