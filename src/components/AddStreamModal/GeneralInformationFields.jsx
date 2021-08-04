import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputElement from '../InputElement';
import DurationInputElement from '../DurationInputElement';
import TextareaElement from '../TextareaElement';
import styles from './AddStreamModal.module.css';

const GeneralInformationFields = ({
  title,
  description,
  setTitle,
  setDescription,
  onStartChangeHandler,
  onEndChangeHandler,
  startDate,
  endDate,
}) => {
  const descriptionSectionClass = classNames(
    styles.section,
    styles.descriptionSection,
  );

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <span className={styles.title}>Stream name</span>
          <InputElement
            extraClass="duration"
            type="text"
            placeholder="Enter name"
            value={title}
            required
            onChangeHandler={(value) => setTitle(value)}
          />
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Stream duration</span>
          <DurationInputElement
            onStartChange={onStartChangeHandler}
            onEndChange={onEndChangeHandler}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
      <div className={descriptionSectionClass}>
        <span className={styles.title}>Stream description</span>
        <TextareaElement
          value={description}
          placeholder="Enter desctiprion"
          onChangeHandler={(value) => setDescription(value)}
          required
        />
        <span className={styles.counter}>{`${description.length} / 1000`}</span>
      </div>
    </>
  );
};

GeneralInformationFields.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  onStartChangeHandler: PropTypes.func.isRequired,
  onEndChangeHandler: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default GeneralInformationFields;
