import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import selectStreams from '../../store/auth/selectors';
import Streams from '../Streams/Streams';

const CurrentStreams = () => {
  const [streams, setStreams] = useState([]);
  const selectedStreams = useSelector(selectStreams);

  useEffect(() => {
    const updateStreams = () => {
      const filtered = selectedStreams.filter((item) => item.status !== 'Finished');
      setStreams(filtered);
    };
    updateStreams();
  }, []);

  return (
    <Streams streams={streams} />
  );
};

export default CurrentStreams;
