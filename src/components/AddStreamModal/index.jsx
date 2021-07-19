import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import InputElement from '../InputElement';
import ActionButton from '../ActionButton';

const AddStreamModal = ({
  isOpen, onCancel, onDismiss, onClick,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const actions = () => (
    <>
      <ActionButton btnStyle="cancel" onClickHandler={onCancel}>
        Cancel
      </ActionButton>
      <ActionButton
        btnStyle="accept"
        onClickHandler={() => onClick(title, description)}
      >
        Add
      </ActionButton>
    </>
  );

  return (
    <Modal
      title="Add a new stream"
      isOpen={isOpen}
      onCancel={onCancel}
      onDismiss={onDismiss}
      actions={actions}
    >
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
    </Modal>
  );
};

AddStreamModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

AddStreamModal.defaultProps = {
  onClick: null,
};

export default AddStreamModal;
