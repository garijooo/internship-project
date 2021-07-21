import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import InputElement from '../InputElement';
import ActionButton from '../ActionButton';
import styles from './AddStreamModal.module.css';

const AddStreamModal = ({
  isOpen, onCancel, onDismiss, onSubmitHandler,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onActionHandler = (e) => {
    e.preventDefault();
    onSubmitHandler(title, description);
  };

  return (
    <Modal
      title="Add a new stream"
      isOpen={isOpen}
      onCancel={onCancel}
      onDismiss={onDismiss}
    >
      <form onSubmit={onActionHandler}>
        <InputElement
          type="text"
          placeholder="Title"
          value={title}
          required
          onChangeHandler={(value) => setTitle(value)}
        />
        <InputElement
          type="text"
          placeholder="Description"
          value={description}
          required
          onChangeHandler={(value) => setDescription(value)}
        />
        <div className={styles.buttons}>
          <ActionButton btnStyle="cancel" onClickHandler={onCancel}>
            Cancel
          </ActionButton>
          <ActionButton
            btnStyle="accept"
          >
            Add
          </ActionButton>
        </div>
      </form>
    </Modal>
  );
};

AddStreamModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func,
};

AddStreamModal.defaultProps = {
  onSubmitHandler: null,
};

export default AddStreamModal;
