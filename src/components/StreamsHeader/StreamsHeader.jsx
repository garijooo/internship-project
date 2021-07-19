import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './StreamsHeader.module.css';
import ActionButton from '../ActionButton';
import AddStreamModal from '../AddStreamModal';

const StreamsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onStreamAddHandler = (title, description) => {
    console.log(`${title} ${description}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.upper}>
        <h1 className={styles.title}>Internship Streams</h1>
        <ActionButton btnStyle="accept" onClickHandler={() => setIsOpen(!isOpen)}>
          <AiOutlinePlus />
          Add new Stream
        </ActionButton>
        <AddStreamModal
          isOpen={isOpen}
          onCancel={() => setIsOpen(false)}
          onDismiss={() => setIsOpen(false)}
          onClick={onStreamAddHandler}
        />
      </div>
      <div className={styles.links}>
        <NavLink
          to="/streams/current"
          className={styles.link}
          activeClassName={styles.active}
        >
          Current streams
        </NavLink>
        <NavLink
          to="/streams/finished"
          className={styles.link}
          activeClassName={styles.active}
        >
          Finished streams
        </NavLink>
      </div>
    </header>
  );
};

export default StreamsHeader;
