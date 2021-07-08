import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AiOutlineFilter,
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';
import styles from './StreamsList.module.css';

const ListHeader = () => {
  const [path, setPath] = useState('');
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname.split('/')[2]);
  }, []);

  return (
    <tr className={styles.header}>
      <th>Stream Name</th>
      <th>
        <div className={styles.cell}>
          Start Date
          <div className={styles.updown}>
            <AiFillCaretUp />
            <AiFillCaretDown />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Duration
          <div className={styles.updown}>
            <AiFillCaretUp />
            <AiFillCaretDown />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Interns
          <div className={styles.updown}>
            <AiFillCaretUp />
            <AiFillCaretDown />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Mentor
          <div className={styles.filter}>
            <AiOutlineFilter />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Lead
          <div className={styles.filter}>
            <AiOutlineFilter />
          </div>
        </div>
      </th>
      {path === 'current' && (
      <th>
        <div className={styles.cell}>
          Status
          <div className={styles.filter}>
            <AiOutlineFilter />
          </div>
        </div>
      </th>
      )}
      <th> </th>
    </tr>
  );
};

export default ListHeader;
