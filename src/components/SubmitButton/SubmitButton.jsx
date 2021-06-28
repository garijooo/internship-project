import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ title }) => (
  <button type="submit" className={styles.submit_button}>
    <AiOutlinePlus />
    <Link to="/streams/new">{title}</Link>
  </button>
);

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
