import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCalendar, AiOutlineSwapRight } from 'react-icons/ai';
import classNames from 'classnames';
import styles from './DurationInputElement.module.css';

const DurationInputElement = ({
  onStartChange, onEndChange, startDate, endDate,
}) => {
  const endItemClass = classNames(styles.item, styles.end);

  return (
    <div className={styles.duration}>
      <div className={styles.item}>
        <input
          className={styles.text}
          type="text"
          placeholder="Start date"
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
        />
        <input
          type="date"
          className={styles.date}
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
        />
        <span className={styles.icon}>
          <AiOutlineSwapRight size={14} />
        </span>
      </div>
      <div className={endItemClass}>
        <input
          className={styles.text}
          type="text"
          placeholder="End date"
          value={endDate}
          onChange={(e) => onEndChange(e.target.value)}
        />
        <input
          type="date"
          className={styles.date}
          value={startDate}
          onChange={(e) => onEndChange(e.target.value)}
        />
        <span className={styles.icon}>
          <AiOutlineCalendar size={14} />
        </span>
      </div>
    </div>
  );
};

DurationInputElement.propTypes = {
  onStartChange: PropTypes.func.isRequired,
  onEndChange: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default DurationInputElement;
