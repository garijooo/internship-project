import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ title, onClickHandler }) => (
  <button type="submit" className={styles.submit_button} onClick={onClickHandler}>
    <AiOutlinePlus />
    {title}
  </button>
);

SubmitButton.propTypes = {
  title: PropTypes.string,
  onClickHandler: PropTypes.func,
};

SubmitButton.defaultProps = {
  title: '',
  onClickHandler: null,
};

export default SubmitButton;
