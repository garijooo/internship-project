import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './ActionButton.module.css';

const ActionButton = ({ title }) => (
  <button type="submit" className={styles.submit_button}>
    <AiOutlinePlus />
    <Link to="/streams/new">{title}</Link>
  </button>
);

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ActionButton;
