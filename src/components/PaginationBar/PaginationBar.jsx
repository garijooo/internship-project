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

  const onRangeChangeHandler = (e) => {
    e.preventDefault();
    onRangeChange(Number(e.target.value));
    onStepChange(1);
  };

  const renderLeftSide = () => {
    const interval = step - 1 < 4 ? step - 1 : 4;
    const buttons = [];
    let diff = 4 - (countPages - step);
    if (diff < 2) diff = 2;
    for (let i = 1; i <= diff; i += 1) {
      if (step - i >= 1) {
        buttons.unshift(
          <li className={styles.item}>
            <button
              type="button"
              className={styles.button}
              key={step - i}
              onClick={() => onStepChange(step - i)}
            >
              {step - i}
            </button>
          </li>,
        );
      }
    }
    if (step - 3 > 1) {
      buttons.unshift(
        <li className={styles.item}>
          <button type="button" className={ellipsisClass}>
            <AiOutlineEllipsis
              size={12}
              onClick={() => onStepChange(step - interval)}
            />
            <AiOutlineDoubleLeft
              className={styles.arrows}
              size={12}
              onClick={() => onStepChange(step - interval)}
            />
          </button>
        </li>,
      );
    }
    if (step - 2 > 1 && countPages > 4) {
      buttons.unshift(
        <li className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => onStepChange(1)}
          >
            {1}
          </button>
        </li>,
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
          <li className={styles.item}>
            <button
              type="button"
              className={styles.button}
              key={step + i}
              onClick={() => onStepChange(step + i)}
            >
              {step + i}
            </button>
          </li>,
        );
      }
    }
    if (step + 3 < countPages) {
      buttons.push(
        <li className={styles.item}>
          <button type="button" className={ellipsisClass}>
            <AiOutlineEllipsis
              size={12}
              onClick={() => onStepChange(step + interval)}
            />
            <AiOutlineDoubleRight
              className={styles.arrows}
              size={12}
              onClick={() => onStepChange(step + interval)}
            />
          </button>
        </li>,
      );
    }
    if (step + 2 < countPages && countPages > 4) {
      buttons.push(
        <li className={styles.item}>
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

  return (
    <section className={styles.container}>
      <div className={styles.bar}>
        <span className={styles.counter}>
          {step * range > amount
            ? `${(step - 1) * range + 1}-${amount} of ${amount} items`
            : `${(step - 1) * range + 1}-${step * range} of ${amount} items`}
        </span>
        <ul className={styles.pages}>
          <li className={styles.item}>
            <button
              type="button"
              disabled={step === 1}
              className={styles.button}
              onClick={() => onStepChange(step - 1)}
            >
              <AiOutlineLeft size={12} />
            </button>
          </li>
          {renderLeftSide()}
          <li className={styles.item}>
            <button type="button" className={activeButtonClass}>
              {step}
            </button>
          </li>
          {renderRightSide()}
          <li className={styles.item}>
            <button
              type="button"
              disabled={step === countPages}
              className={styles.button}
              onClick={() => onStepChange(step + 1)}
            >
              <AiOutlineRight size={12} />
            </button>
          </li>
        </ul>
        <div className={styles.format}>
          <AiOutlineDown className={styles.dropdown} size={12} />
          <select
            className={styles.select}
            onChange={onRangeChangeHandler}
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
