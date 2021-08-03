import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectStreams from '../../store/auth/selectors';
import { fetchStreams } from '../../store/auth/actions';
import token from '../../utils/getTokenByBrowser';
import Streams from '../Streams/Streams';

const FinishedStreams = () => {
  const [streams, setStreams] = useState([]);
  const selectedStreams = useSelector(selectStreams);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchStreams(token)), [dispatch]);

  useEffect(() => {
    const updateStreams = () => {
      if (Array.isArray(selectedStreams)) {
        setStreams((selectedStreams ?? []).filter((item) => item.status === 'Completed'));
      }
    };
    updateStreams();
  }, [selectedStreams]);

  return (
    <Streams streams={streams} />
  );
};

export default FinishedStreams;
