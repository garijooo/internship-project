import React, { useState, useEffect } from 'react';
import PaginationBar from '../PaginationBar/PaginationBar';
import ListRow from './ListRow';
import ListHeader from './ListHeader';
import styles from './StreamsList.module.css';
import currentStreams from '../../utils/currentStreams';

const StreamsList = () => {
  const [streams, setStreams] = useState([]);
  const [amount, setAmount] = useState(0);
  const [step, setStep] = useState(1);
  const [range, setRange] = useState(10);
  const [currentExpand, setCurrentExpand] = useState(null);

  useEffect(() => {
    setStreams([...currentStreams]);
    setAmount(currentStreams.length);
    setStep(2);
  }, []);

  const onExpandHandler = (index) => {
    setCurrentExpand(index);
  };
  const onRangeChangeHandler = (updatedRange) => {
    console.log('onRangeChangeHandler');
    setRange(updatedRange);
  };

  const renderStreams = () => {
    if (amount < range) {
      return streams.map((stream, index) => (
        <ListRow
          key={`${index + 1}`}
          stream={stream}
          index={index}
          onClickHandler={onExpandHandler}
          currentExpand={currentExpand}
        />
      ));
    }
    const filteredStreams = streams.filter(
      (stream, index) => (index >= (step - 1) * range && index < step * range),
    );
    return filteredStreams.map((stream, index) => (
      <ListRow
        key={`${index + 1}`}
        stream={stream}
        index={index}
        onClickHandler={onExpandHandler}
        currentExpand={currentExpand}
      />
    ));
  };

  return (
    <>
      <section className={styles.list}>
        <table className={styles.table}>
          <thead>
            <ListHeader />
          </thead>
          <tbody>
            {renderStreams()}
          </tbody>
        </table>
      </section>
      <PaginationBar
        amount={amount}
        step={step}
        range={range}
        onRangeChange={onRangeChangeHandler}
      />
    </>
  );
};

export default StreamsList;
