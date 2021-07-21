import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import selectStreams from '../../store/auth/selectors';
import Streams from '../Streams/Streams';

const FinishedStreams = () => {
  const [streams, setStreams] = useState([]);
  const selectedStreams = useSelector(selectStreams);

  useEffect(() => {
    const updateStreams = () => {
      const filtered = setStreams((selectedStreams ?? []).filter((item) => item.status !== 'Finished'));
      setStreams(filtered);
    };
    updateStreams();
  }, [selectedStreams]);

  return (
    <Streams streams={streams} />
  );
};

export default FinishedStreams;
