import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputElement from '../InputElement';
import TextareaElement from '../TextareaElement';
import ActionButton from '../ActionButton';
import styles from './AddStreamModal.module.css';

const ThemeFormFields = ({
  onThemeFormClose, currentName, currentDescription, id, plan, onPlanChange,
}) => {
  const descriptionSectionClass = classNames(styles.section, styles.themesection);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentName && currentDescription) {
      setName(currentName);
      setDescription(currentDescription);
    }
  }, [currentDescription, currentName]);

  const onClickHandler = () => {
    if (currentName && currentDescription && id >= 0) {
      const updated = plan.map((item, index) => ((index === id)
        ? {
          themename: name,
          themedescription: description,
        }
        : item));
      onPlanChange(updated);
    } else {
      onPlanChange([...plan, {
        themename: name,
        themedescription: description,
      }]);
    }
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
  onThemeFormClose: PropTypes.func.isRequired,
  currentDescription: PropTypes.string,
  currentName: PropTypes.string,
  id: PropTypes.number,
  plan: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  onPlanChange: PropTypes.func.isRequired,
};

ThemeFormFields.defaultProps = {
  currentDescription: '',
  currentName: '',
  id: -1,
};

export default ThemeFormFields;
