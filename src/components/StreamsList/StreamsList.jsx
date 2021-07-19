import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PaginationBar from '../PaginationBar/PaginationBar';
import ListRow from './ListRow';
import ListHeader from './ListHeader';
import styles from './StreamsList.module.css';

const StreamsList = ({ fetchedStreams }) => {
  const [streams, setStreams] = useState([]);
  const [amount, setAmount] = useState(0);
  const [step, setStep] = useState(1);
  const [range, setRange] = useState(10);
  const [currentExpand, setCurrentExpand] = useState(null);

  useEffect(() => {
    setStreams(fetchedStreams);
    setAmount(fetchedStreams.length);
  }, []);

  const onExpandHandler = (index) => setCurrentExpand(index);
  const onStepChangeHandler = (updatedStep) => setStep(updatedStep);
  const onRangeChangeHandler = (updatedRange) => {
    setStep(1);
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
        onStepChange={onStepChangeHandler}
      />
    </>
  );
};

StreamsList.propTypes = {
  fetchedStreams: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.number,
    interns: PropTypes.number,
    mentor: PropTypes.string,
    mentorAvatar: PropTypes.string,
    lead: PropTypes.string,
    leadAvatar: PropTypes.string,
    status: PropTypes.string,
  })),
};

StreamsList.defaultProps = {
  fetchedStreams: [],
};

export default StreamsList;