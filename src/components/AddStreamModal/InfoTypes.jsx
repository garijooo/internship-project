import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './AddStreamModal.module.css';

const InfoTypes = ({ onTypeChange, type, isClickable }) => {
  const generalInfoClass = classNames(styles.item, styles.general, {
    [styles.active]: !type,
  });
  const studyPlanClass = classNames(styles.item, {
    [styles.active]: type,
  });
  return (
    <div className={styles.infotypes}>
      <button
        type="button"
        onClick={() => onTypeChange(false)}
        className={generalInfoClass}
      >
        General Information
      </button>
      <button
        type="button"
        onClick={isClickable ? () => onTypeChange(true) : null}
        className={studyPlanClass}
      >
        Study Plan
      </button>
    </div>
  );
};

InfoTypes.propTypes = {
  onTypeChange: PropTypes.func.isRequired,
  type: PropTypes.bool.isRequired,
  isClickable: PropTypes.bool.isRequired,
};

export default InfoTypes;
