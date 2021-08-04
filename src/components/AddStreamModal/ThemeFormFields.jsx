import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputElement from '../InputElement';
import TextareaElement from '../TextareaElement';
import ActionButton from '../ActionButton';
import styles from './AddStreamModal.module.css';

const ThemeFormFields = ({ onAddTheme, onThemeFormClose }) => {
  const descriptionSectionClass = classNames(styles.section, styles.themesection);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onClickHandler = () => {
    onAddTheme(name, description);
    onThemeFormClose();
  };

  return (
    <div className={styles.themeform}>
      <div className={styles.section}>
        <span className={styles.title}>Theme name</span>
        <InputElement
          extraClass="duration-wide"
          placeholder="Enter name"
          type="text"
          value={name}
          required={false}
          onChangeHandler={(value) => setName(value)}
        />
      </div>
      <div className={descriptionSectionClass}>
        <span className={styles.title}>Theme description</span>
        <TextareaElement
          placeholder="Enter description"
          value={description}
          required={false}
          onChangeHandler={(value) => setDescription(value)}
        />
        <span className={styles.counter}>{`${description.length} / 1000`}</span>
      </div>
      <div className={styles.themebtn}>
        <ActionButton
          btnStyle="simple"
          onClickHandler={onThemeFormClose}
        >
          Cancel
        </ActionButton>
        <ActionButton
          btnStyle="save"
          onClickHandler={onClickHandler}
          disabled={!(name && description)}
        >
          Save
        </ActionButton>
      </div>
    </div>
  );
};

ThemeFormFields.propTypes = {
  onAddTheme: PropTypes.func.isRequired,
  onThemeFormClose: PropTypes.func.isRequired,
};

export default ThemeFormFields;
