import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import ActionButton from '../ActionButton';
import StreamTypes from './StreamTypes';
import InfoTypes from './InfoTypes';
import GeneralInformationFields from './GeneralInformationFields';
import ThemeFormFields from './ThemeFormFields';
import ThemesList from './ThemesList';
import styles from './AddStreamModal.module.css';

const AddStreamModal = ({ isOpen, onCancel, onSubmitHandler }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [isNew, setIsNew] = useState(true);
  const onStreamTypeChangeHandler = (value) => setIsNew(value);
  console.log(isNew);

  const [isThemeFormOpened, setIsThemeFormOpened] = useState(true);

  const [plan, setPlan] = useState([]);
  useEffect(() => {
    if (plan.length < 1) setIsThemeFormOpened(true);
  }, [plan]);

  const [isPlan, setIsPlan] = useState(false);
  const onInfoTypeChangeHandler = (value) => setIsPlan(value);

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(title, description);
  };

  const onStartChangeHandler = (value) => setStartDate(value);
  const onEndChangeHandler = (value) => setEndDate(value);

  const onAddThemeHandler = (themename, themedescription) => {
    setPlan([...plan, { themename, themedescription }]);
  };

  const onDeleteThemeHandler = (index) => setPlan(plan.filter((item, id) => id !== index));
  const onThemeFormCloseHandler = () => {
    setIsThemeFormOpened(false);
  };

  const [opened, setOpened] = useState(-1);
  const onChangeOpenedHandler = (value) => setOpened(value);

  const isDisabled = () => (
    isPlan
      ? (plan.length === 0)
      : !(title && description && startDate && endDate)
  );

  return (
    <Modal title="Add Stream" isOpen={isOpen} onCancel={onCancel}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.fields}>
          <StreamTypes onTypeChange={onStreamTypeChangeHandler} />
          <InfoTypes
            onTypeChange={onInfoTypeChangeHandler}
            type={isPlan}
            isClickable={(title && description && startDate && endDate)}
          />
          {
            (plan.length > 0 && isPlan) && (
            <ThemesList
              onChangeOpened={onChangeOpenedHandler}
              onDeleteTheme={onDeleteThemeHandler}
              plan={plan}
              opened={opened}
            />
            )
          }
          {(!isThemeFormOpened && isPlan) && (
          <button
            className={styles.themeadd}
            type="button"
            onClick={() => setIsThemeFormOpened(true)}
          >
            + Add new theme
          </button>
          )}
          {isPlan
            ? (
              isThemeFormOpened
              && (
              <ThemeFormFields
                onAddTheme={onAddThemeHandler}
                onThemeFormClose={onThemeFormCloseHandler}
                plan={plan}
              />
              )
            )
            : (
              <GeneralInformationFields
                title={title}
                description={description}
                setTitle={(value) => setTitle(value)}
                setDescription={(value) => setDescription(value)}
                onStartChangeHandler={onStartChangeHandler}
                onEndChangeHandler={onEndChangeHandler}
                startDate={startDate}
                endDate={endDate}
              />
            )}

        </div>
        <div className={styles.buttons}>
          <ActionButton btnStyle="cancel" onClickHandler={onCancel}>
            Cancel
          </ActionButton>
          <ActionButton
            btnStyle="accept"
            disabled={isDisabled()}
            onClickHandler={
              isPlan ? () => console.log(plan) : () => setIsPlan(true)
            }
          >
            {isPlan ? 'Add New Stream' : 'Continue'}
          </ActionButton>
        </div>
      </form>
    </Modal>
  );
};

AddStreamModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func,
};

AddStreamModal.defaultProps = {
  onSubmitHandler: null,
};

export default AddStreamModal;
