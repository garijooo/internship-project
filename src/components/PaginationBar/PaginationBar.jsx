import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineEllipsis,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from 'react-icons/ai';
import classNames from 'classnames';
import styles from './PaginationBar.module.css';

const PaginationBar = ({
  amount,
  step,
  range,
  onRangeChange,
  onStepChange,
}) => {
  const activeButtonClass = classNames(styles.button, styles.active);
  const ellipsisClass = classNames(styles.button, styles.ellipsis);
  const countPages = Math.ceil(amount / range);

  const renderLeftSide = () => {
    const interval = step - 1 < 4 ? step - 1 : 4;
    const buttons = [];
    let diff = 4 - (countPages - step);
    if (diff < 2) diff = 2;
    for (let i = 1; i <= diff; i += 1) {
      if (step - i >= 1) {
        buttons.unshift(
          <button
            type="button"
            className={styles.button}
            key={step - i}
            onClick={() => onStepChange(step - i)}
          >
            {step - i}
          </button>,
        );
      }
    }
    if (step - 3 > 1) {
      buttons.unshift(
        <button type="button" className={ellipsisClass}>
          <AiOutlineEllipsis />
          <AiOutlineDoubleLeft
            className={styles.arrows}
            onClick={() => onStepChange(step - interval)}
          />
        </button>,
      );
    }
    if (step - 2 > 1) {
      buttons.unshift(
        <button
          type="button"
          className={styles.button}
          onClick={() => onStepChange(1)}
        >
          {1}
        </button>,
      );
    }
    return buttons;
  };

  const renderRightSide = () => {
    const buttons = [];
    const interval = countPages - step < 4 ? countPages - step : 4;
    let diff = 4 - (step - 1);
    if (diff < 2) diff = 2;
    for (let i = 1; i <= diff; i += 1) {
      if (step + i <= countPages) {
        buttons.push(
          <button
            type="button"
            className={styles.button}
            key={step + i}
            onClick={() => onStepChange(step + i)}
          >
            {step + i}
          </button>,
        );
      }
    }
    if (step + 3 < countPages) {
      buttons.push(
        <button type="button" className={ellipsisClass}>
          <AiOutlineEllipsis />
          <AiOutlineDoubleRight
            className={styles.arrows}
            onClick={() => onStepChange(step + interval)}
          />
        </button>,
      );
    }
    if (step + 2 < countPages) {
      buttons.push(
        <button
          type="button"
          className={styles.button}
          onClick={() => onStepChange(countPages)}
        >
          {countPages}
        </button>,
      );
    }
    return buttons;
  };

  return (
    <section className={styles.container}>
      <div className={styles.bar}>
        <span className={styles.counter}>
          {step * range > amount
            ? `${(step - 1) * range + 1}-${amount} of ${amount} items`
            : `${(step - 1) * range + 1}-${step * range} of ${amount} items`}
        </span>
        <div className={styles.pages}>
          <button
            type="button"
            disabled={step === 1}
            className={styles.button}
            onClick={() => onStepChange(step - 1)}
          >
            <AiOutlineLeft />
          </button>
          {renderLeftSide()}
          <button type="button" className={activeButtonClass}>
            {step}
          </button>
          {renderRightSide()}
          <button
            type="button"
            disabled={step === countPages}
            className={styles.button}
            onClick={() => onStepChange(step + 1)}
          >
            <AiOutlineRight />
          </button>
        </div>
        <div className={styles.format}>
          <AiOutlineDown className={styles.dropdown} />
          <select
            className={styles.select}
            onChange={(e) => onRangeChange(parseInt(e.target.value, 10))}
          >
            <option value={10}>10/page</option>
            <option value={15}>15/page</option>
            <option value={20}>20/page</option>
          </select>
        </div>
      </div>
    </section>
  );
};

PaginationBar.propTypes = {
  amount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  range: PropTypes.number.isRequired,
  onRangeChange: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default PaginationBar;
