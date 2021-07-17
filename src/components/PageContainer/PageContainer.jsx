import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import styles from './PageContainer.module.css';

const PageContainer = ({ children }) => (
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

PageContainer.propTypes = {
  children: PropTypes.node,
};

PageContainer.defaultProps = {
  children: null,
};

export default PageContainer;
