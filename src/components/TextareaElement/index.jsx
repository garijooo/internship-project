import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './TextareaElement.module.css';

const TextareaElement = ({
  value, placeholder, onChangeHandler, required, extraClass,
}) => {
  const textareaClass = classNames(styles.textarea, {
    [styles[extraClass]]: extraClass,
  });

  return (
    <textarea
      className={textareaClass}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e.target.value)}
      required={required}
      maxLength={1000}
      rows={6}
    />
  );
};

TextareaElement.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  extraClass: PropTypes.string,
};

TextareaElement.defaultProps = {
  value: '',
  placeholder: '',
  extraClass: '',
};

export default TextareaElement;
