import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  AiOutlineFilter,
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';
import FilterOptions from '../FilterOptions';
import styles from './StreamsList.module.css';

const ListHeader = ({ onSortAction, onFilterAction }) => {
  const location = useLocation();
  const isCurrent = location.pathname.split('/')[2] === 'current';

  const [active, setActive] = useState(0);

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
            onClick={() => (active === 1 ? setActive(0) : setActive(1))}
            onKeyDown={() => (active === 1 ? setActive(0) : setActive(1))}
          >
            <AiOutlineFilter />
            <FilterOptions
              field="mentor"
              active={active}
              current={1}
              onFilterAction={onFilterAction}
              isCurrent={isCurrent}
            />
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
            onClick={() => (active === 2 ? setActive(0) : setActive(2))}
            onKeyDown={() => (active === 2 ? setActive(0) : setActive(2))}
          >
            <AiOutlineFilter />
            <FilterOptions
              field="lead"
              active={active}
              current={2}
              onFilterAction={onFilterAction}
              isCurrent={isCurrent}
            />
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
              onClick={() => (active === 3 ? setActive(0) : setActive(3))}
              onKeyDown={() => (active === 3 ? setActive(0) : setActive(0))}
            >
              <AiOutlineFilter />
              <FilterOptions
                field="status"
                active={active}
                current={3}
                onFilterAction={onFilterAction}
                isCurrent={isCurrent}
              />
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
