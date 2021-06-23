import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from './Grid.module.css';

const Grid = ({ children }) => (
  <div className={styles.grid}>
    <Header />
    <Navbar />
    <div className={styles.dashboard}>
      {children}
    </div>
  </div>
);

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
