import React from 'react';
import finishedStreams from '../../utils/finishedStreams';
import Streams from '../Streams/Streams';

const FinishedStreams = () => (
  <Streams streams={finishedStreams} />
);

export default FinishedStreams;
