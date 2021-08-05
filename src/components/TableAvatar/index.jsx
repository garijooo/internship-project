import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableAvatar.module.css';

const TableAvatar = ({ image }) => <img src={image} alt="avatar" className={styles.image} />;

TableAvatar.propTypes = {
  image: PropTypes.string.isRequired,
};

export default TableAvatar;
