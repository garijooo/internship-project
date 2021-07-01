import React, { useState, useEffect } from 'react';
import {
  AiOutlineFilter,
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';
import PaginationBar from '../PaginationBar/PaginationBar';
import ListRow from './ListRow';
import styles from './StreamsList.module.css';
import currentStreams from '../../utils/currentStreams';

const StreamsList = () => {
  const [streams, setStreams] = useState([]);
  const [amount, setAmount] = useState(0);
  const [currentExpand, setCurrentExpand] = useState(null);

  useEffect(() => {
    setStreams([...currentStreams]);
    setAmount(currentStreams.length);
  }, []);

  const onExpand = (index) => {
    setCurrentExpand(index);
  };

  const renderContent = () => streams.map((stream, index) => (
    <ListRow
      key={`${index + 1}`}
      stream={stream}
      index={index}
      onClickHandler={onExpand}
      currentExpand={currentExpand}
    />
  ));

  return (
    <>
      <section className={styles.list}>
        <table className={styles.table}>
          <thead>
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
              <th>
                <div className={styles.cell}>
                  Status
                  <div className={styles.filter}>
                    <AiOutlineFilter />
                  </div>
                </div>
              </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{renderContent()}</tbody>
        </table>
      </section>
      <PaginationBar amount={amount} />
    </>
  );
};

export default StreamsList;
