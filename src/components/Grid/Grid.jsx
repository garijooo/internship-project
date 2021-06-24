import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from './Grid.module.css';

const Grid = ({ children }) => (
  <>
    <Header />
    <div className={styles.grid}>
      <Navbar />
      <div className={styles.dashboard}>
        {children}
      </div>
    </div>
  </>
);

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
