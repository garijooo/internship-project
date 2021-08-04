import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddStreamModal.module.css';

const StreamType = ({ onTypeChange }) => (
  <div className={styles.streamtypes}>
    <label className={styles.item} htmlFor="new">
      <input
        className={styles.radio}
        id="new"
        type="radio"
        name="type"
        checked
        onChange={() => onTypeChange(true)}
      />
      <span>Create New Stream</span>
    </label>
    <label className={styles.item} htmlFor="existing">
      <input
        className={styles.radio}
        id="existing"
        type="radio"
        name="type"
        onChange={() => onTypeChange(false)}
      />
      <span>Use Existing Stream</span>
    </label>
  </div>
);

StreamType.propTypes = {
  onTypeChange: PropTypes.func.isRequired,
};

export default StreamType;
