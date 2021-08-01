import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Modal.module.css';

const Modal = ({
  title, children, isOpen, onCancel,
}) => {
  const modalClass = classNames(styles.container, {
    [styles.hidden]: !isOpen,
  });

  return ReactDOM.createPortal(
    <section role="button" tabIndex={0} className={modalClass} onClick={onCancel} onKeyDown={onCancel}>
      <div
        role="button"
        tabIndex={0}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.icon}>
            <AiOutlineClose size={16} onClick={onCancel} />
          </span>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>,
    document.querySelector('#modal'),
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Modal;
