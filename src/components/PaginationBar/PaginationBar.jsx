import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
} from 'react-icons/ai';
import classNames from 'classnames';
import { ICON_SIZE_DEFAULT } from '../../constants';
import RightSideBar from './RightSideBar';
import LeftSideBar from './LeftSideBar';
import styles from './PaginationBar.module.css';

const PaginationBar = ({
  amount,
  step,
  range,
  onRangeChange,
  onStepChange,
}) => {
  const activeButtonClass = classNames(styles.button, styles.active);
  const countPages = Math.ceil(amount / range);
  const itemsCountOptions = [10, 15, 20, 30];

  const onRangeChangeHandler = (e) => {
    e.preventDefault();
    onRangeChange(e.target.value);
    onStepChange(1);
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
          <li className={styles.item} key={`${step}-left`}>
            <button
              type="button"
              disabled={step === 1}
              className={styles.button}
              onClick={() => onStepChange(step - 1)}
            >
              <AiOutlineLeft size={ICON_SIZE_DEFAULT} />
            </button>
          </li>
          <LeftSideBar
            step={step}
            countPages={countPages}
            onStepChange={onStepChange}
          />
          <li className={styles.item} key={`${step}-${step}`}>
            <button type="button" className={activeButtonClass}>
              {step}
            </button>
          </li>
          <RightSideBar
            step={step}
            countPages={countPages}
            onStepChange={onStepChange}
          />
          <li className={styles.item} key={`${step}-right`}>
            <button
              type="button"
              disabled={step === countPages}
              className={styles.button}
              onClick={() => onStepChange(step + 1)}
            >
              <AiOutlineRight size={ICON_SIZE_DEFAULT} />
            </button>
          </li>
        </ul>
        <div className={styles.format}>
          <AiOutlineDown className={styles.dropdown} size={ICON_SIZE_DEFAULT} />
          <select
            className={styles.select}
            onChange={onRangeChangeHandler}
          >
            {itemsCountOptions.map((item) => (<option value={item}>{`${item}/page`}</option>))}
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
