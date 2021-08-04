import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Options.module.css';

const Option = ({ children, subclass }) => {
  const optionClass = classNames(styles.item, {
    [styles[subclass]]: subclass,
  });

  return <li className={optionClass} key={children}>{children}</li>;
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  subclass: PropTypes.string,
};

Option.defaultProps = {
  subclass: '',
};

export default Option;
