import React from 'react';
import {
  AiOutlineEllipsis,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
} from 'react-icons/ai';
import styles from './PaginationBar.module.css';

const PaginationBar = () => (
  <section className={styles.container}>
    <div className={styles.bar}>
      <span className={styles.counter}>1-10 of 100 items</span>
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
        <select className={styles.select}>
          <option>10/page</option>
          <option>15/page</option>
          <option>20/page</option>
        </select>
      </div>
    </div>
  </section>
);

export default PaginationBar;
