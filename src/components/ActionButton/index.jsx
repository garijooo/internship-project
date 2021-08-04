import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ActionButton.module.css';

const ActionButton = ({
  btnStyle, children, onClickHandler, disabled,
}) => {
  const buttonClass = classNames(styles.btn, {
    [styles.accept]: btnStyle === 'accept',
    [styles.cancel]: btnStyle === 'cancel',
    [styles.save]: btnStyle === 'save',
    [styles.simple]: btnStyle === 'simple',
  });

  return (
    <button
      className={buttonClass}
      type={onClickHandler ? 'button' : 'submit'}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  btnStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};

ActionButton.defaultProps = {
  btnStyle: '',
  onClickHandler: null,
  disabled: false,
};

export default ActionButton;
