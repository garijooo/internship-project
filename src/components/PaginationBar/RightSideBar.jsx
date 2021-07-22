import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineEllipsis,
  AiOutlineDoubleRight,
} from 'react-icons/ai';
import classNames from 'classnames';
import { ICON_SIZE_DEFAULT } from '../../constants';
import styles from './PaginationBar.module.css';

const RightSideBar = ({ step, countPages, onStepChange }) => {
  const ellipsisClass = classNames(styles.button, styles.ellipsis);

  const interval = countPages - step < 4 ? countPages - step : 4;
  const buttons = [];

  let diff = 4 - (step - 1);
  if (diff < 2) diff = 2;

  for (let i = 1; i <= diff; i += 1) {
    if (step + i <= countPages) {
      buttons.push(
        <li className={styles.item} key={`${step}+${step + i}`}>
          <button
            type="button"
            className={styles.button}
            onClick={() => onStepChange(step + i)}
          >
            {step + i}
          </button>
        </li>,
      );
    }
  }
  if (step + 3 < countPages && countPages > 5) {
    buttons.push(
      <li className={styles.item}>
        <button type="button" className={ellipsisClass} onClick={() => onStepChange(step + interval)}>
          <AiOutlineEllipsis size={ICON_SIZE_DEFAULT} />
          <AiOutlineDoubleRight className={styles.arrows} size={ICON_SIZE_DEFAULT} />
        </button>
      </li>,
    );
  }
  if (step + 2 < countPages && countPages > 4) {
    buttons.push(
      <li className={styles.item} key={`${step}-${countPages}`}>
        <button
          type="button"
          className={styles.button}
          onClick={() => onStepChange(countPages)}
        >
          {countPages}
        </button>
      </li>,
    );
  }
  return buttons;
};

RightSideBar.propTypes = {
  step: PropTypes.number.isRequired,
  countPages: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default RightSideBar;
