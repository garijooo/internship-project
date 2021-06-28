import React from 'react';
import Streams from '../Streams/Streams';
import StreamsList from '../../components/StreamsList/StreamsList';
// import styles from '../Streams/Streams.module.css';

const CurrentStreams = () => (
  <Streams>
    <StreamsList />
  </Streams>
);

export default CurrentStreams;
