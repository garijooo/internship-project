import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  AiOutlineFilter,
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';
import styles from './StreamsList.module.css';

const ListHeader = ({ onSortAction, onFilterAction }) => {
  const location = useLocation();
  const isCurrent = location.pathname.split('/')[2] === 'current';

  return (
    <tr className={styles.header}>
      <th>Stream Name</th>
      <th>
        <div className={styles.cell}>
          Start Date
          <div
            role="button"
            tabIndex={0}
            className={styles.updown}
            onClick={() => onSortAction('date')}
            onKeyDown={() => onSortAction('date')}
          >
            <AiFillCaretUp />
            <AiFillCaretDown />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Duration
          <div
            className={styles.updown}
            role="button"
            tabIndex={0}
            onClick={() => onSortAction('duration')}
            onKeyDown={() => onSortAction('duration')}
          >
            <AiFillCaretUp />
            <AiFillCaretDown />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Interns
          <div
            className={styles.updown}
            role="button"
            tabIndex={0}
            onClick={() => onSortAction('interns')}
            onKeyDown={() => onSortAction('interns')}
          >
            <AiFillCaretUp />
            <AiFillCaretDown />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Mentor
          <div
            className={styles.filter}
            role="button"
            tabIndex={0}
            onClick={() => onFilterAction('mentor')}
            onKeyDown={() => onFilterAction('mentor')}
          >
            <AiOutlineFilter />
          </div>
        </div>
      </th>
      <th>
        <div className={styles.cell}>
          Lead
          <div
            className={styles.filter}
            role="button"
            tabIndex={0}
            onClick={() => onFilterAction('lead')}
            onKeyDown={() => onFilterAction('lead')}
          >
            <AiOutlineFilter />
          </div>
        </div>
      </th>
      {isCurrent && (
      <th>
        <div className={styles.cell}>
          Status
          <div
            className={styles.filter}
            role="button"
            tabIndex={0}
            onClick={() => onFilterAction('status')}
            onKeyDown={() => onFilterAction('status')}
          >
            <AiOutlineFilter />
          </div>
        </div>
      </th>
      )}
      <th> </th>
    </tr>
  );
};

ListHeader.propTypes = {
  onSortAction: PropTypes.func.isRequired,
  onFilterAction: PropTypes.func.isRequired,
};

export default ListHeader;
