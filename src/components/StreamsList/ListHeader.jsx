import React from 'react';
import styles from './StreamsList.module.css';

const ListHeader = () => (
  <div className={styles.header}>
    <div>Stream Name</div>
    <div>Start Date</div>
    <div>Duration</div>
    <div>Interns</div>
    <div>Mentor</div>
    <div>Lead</div>
    <div>Status</div>
  </div>
);

export default ListHeader;
