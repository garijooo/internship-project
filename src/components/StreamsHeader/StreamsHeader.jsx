import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './StreamsHeader.module.css';
import ActionButton from '../ActionButton';
import AddStreamModal from '../AddStreamModal';
import fetchWrapper from '../../utils/fetchWrapper';
import { fetchStreams } from '../../store/auth/actions';
import getToken from '../../utils/getTokenByBrowser';

const StreamsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onStreamAddHandler = async (title, description) => {
    const token = getToken();
    try {
      const data = await fetchWrapper.post(
        '/api/stream',
        { Authorization: `Bearer ${token}` },
        {
          title,
          description,
          status: 'Oncoming',
        },
      );
      if (data.id) dispatch(fetchStreams(token));
      setIsOpen(false);
    } catch (err) {
      console.log(err.message);
    }
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
          onSubmitHandler={onStreamAddHandler}
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
