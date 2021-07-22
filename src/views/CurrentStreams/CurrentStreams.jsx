import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import selectStreams from '../../store/auth/selectors';
import Streams from '../Streams/Streams';

const CurrentStreams = () => {
  const [streams, setStreams] = useState([]);
  const selectedStreams = useSelector(selectStreams);

  useEffect(() => {
    const updateStreams = () => {
      setStreams((selectedStreams ?? []).filter((item) => item.status !== 'Finished'));
    };
    updateStreams();
  }, [selectedStreams]);

  return (
    <Streams streams={streams} />
  );
};

export default CurrentStreams;
