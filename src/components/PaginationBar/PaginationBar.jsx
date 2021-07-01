import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineEllipsis,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
} from 'react-icons/ai';
import styles from './PaginationBar.module.css';

const PaginationBar = ({
  amount,
  step,
  range,
  onRangeChange,
}) => (
  <section className={styles.container}>
    <div className={styles.bar}>
      <span className={styles.counter}>
        {step * range > amount ? `${(step - 1) * range + 1}-${amount} of ${amount} items` : `${(step - 1) * range + 1}-${step * range} of ${amount} items`}
      </span>
      <div className={styles.pages}>
        <button className={styles.button} type="button">
          <AiOutlineLeft />
        </button>
        <button className={styles.button} type="button">
          1
        </button>
        <div className={styles.gap}>
          <AiOutlineEllipsis />
        </div>
        <button className={styles.button} type="button">
          4
        </button>
        <button className={styles.button} type="button">
          5
        </button>
        <button className={`${styles.button} ${styles.active}`} type="button">
          6
        </button>
        <button className={styles.button} type="button">
          7
        </button>
        <button className={styles.button} type="button">
          8
        </button>
        <div className={styles.gap}>
          <AiOutlineEllipsis />
        </div>
        <button className={styles.button} type="button">
          50
        </button>
        <button className={styles.button} type="button">
          <AiOutlineRight />
        </button>
      </div>
      <div className={styles.format}>
        <AiOutlineDown className={styles.dropdown} />
        <select className={styles.select} onChange={(e) => onRangeChange(e.target.value)}>
          <option value={10}>10/page</option>
          <option value={15}>15/page</option>
          <option value={20}>20/page</option>
        </select>
      </div>
    </div>
  </section>
);

PaginationBar.propTypes = {
  amount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  range: PropTypes.number.isRequired,
  onRangeChange: PropTypes.func.isRequired,
};

export default PaginationBar;
