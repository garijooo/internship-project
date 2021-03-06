import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStreams } from '../../store/auth/actions';
import selectStreams from '../../store/auth/selectors';
import getToken from '../../utils/getTokenByBrowser';
import Streams from '../Streams';

const CurrentStreams = () => {
  const token = getToken();
  const [streams, setStreams] = useState([]);
  const selectedStreams = useSelector(selectStreams);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchStreams(token)), [dispatch, token]);

  useEffect(() => {
    const updateStreams = () => {
      if (Array.isArray(selectedStreams)) {
        const filtered = (selectedStreams ?? [])
          .filter((item) => item.status !== 'Finished')
          .map((item, index) => ({ ...item, interns: 100 - index }));
        setStreams(filtered);
      }
    };
    updateStreams();
  }, [selectedStreams]);

  return <Streams streams={streams} />;
};

export default CurrentStreams;
