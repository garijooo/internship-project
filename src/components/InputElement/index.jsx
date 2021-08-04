import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InputElement.module.css';

const InputElement = ({
  type,
  value,
  placeholder,
  onChangeHandler,
  required,
  extraClass,
}) => {
  const elementClass = classNames(styles.item, {
    [styles[extraClass]]: extraClass,
  });
  return (
    <input
      className={elementClass}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};

InputElement.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  required: PropTypes.bool,
  extraClass: PropTypes.string,
};

InputElement.defaultProps = {
  required: false,
  extraClass: '',
};

export default InputElement;
