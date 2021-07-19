import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ActionButton.module.css';

const ActionButton = ({
  btnStyle, children, onClickHandler,
}) => {
  const buttonClass = classNames(styles.btn, {
    [styles.accept]: btnStyle === 'accept',
    [styles.cancel]: btnStyle === 'cancel',
  });

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  btnStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickHandler: PropTypes.func,
};

ActionButton.defaultProps = {
  btnStyle: '',
  onClickHandler: null,
};

export default ActionButton;
