import React from 'react';
import currentStreams from '../../utils/currentStreams';
import Streams from '../Streams/Streams';

const CurrentStreams = () => (
  <Streams streams={currentStreams} />
);

export default CurrentStreams;
