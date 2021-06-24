import React from 'react';
import PropTypes from 'prop-types';
import styles from './StreamList.module.css';

const StreamsList = ({ children }) => {
  <section className={styles.list}>
    {children}
  </section>;
};
StreamsList.propTypes = {
  children: PropTypes.node,
};

StreamsList.defaultProps = {
  children: PropTypes.node,
};

export default StreamsList;
