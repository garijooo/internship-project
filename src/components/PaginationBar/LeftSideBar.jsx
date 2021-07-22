import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineEllipsis,
  AiOutlineDoubleLeft,
} from 'react-icons/ai';
import classNames from 'classnames';
import { ICON_SIZE_DEFAULT } from '../../constants';
import styles from './PaginationBar.module.css';

const LeftSideBar = ({ step, countPages, onStepChange }) => {
  const ellipsisClass = classNames(styles.button, styles.ellipsis);

  const interval = step - 1 < 4 ? step - 1 : 4;
  const buttons = [];

  let diff = 4 - (countPages - step);
  if (diff < 2) diff = 2;

  if (step - 2 > 1 && countPages > 5) {
    buttons.push(
      <li className={styles.item}>
        <button
          type="button"
          className={styles.button}
          onClick={() => onStepChange(1)}
        >
          1
        </button>
      </li>,
    );
  }

  if (step - 3 > 1 && countPages > 5) {
    buttons.push(
      <li className={styles.item}>
        <button type="button" className={ellipsisClass} onClick={() => onStepChange(step - interval)}>
          <AiOutlineEllipsis size={ICON_SIZE_DEFAULT} />
          <AiOutlineDoubleLeft className={styles.arrows} size={ICON_SIZE_DEFAULT} />
        </button>
      </li>,
    );
  }

  for (let i = diff; i >= 1; i -= 1) {
    if (step - i >= 1) {
      buttons.push(
        <li className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => onStepChange(step - i)}
          >
            {step - i}
          </button>
        </li>,
      );
    }
  }
  return buttons;
};

LeftSideBar.propTypes = {
  step: PropTypes.number.isRequired,
  countPages: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default LeftSideBar;
