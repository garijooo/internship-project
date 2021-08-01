import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.css';

const SearchBar = ({ title, onChangeHandler }) => (
  <form className={styles.searchbar}>
    <AiOutlineSearch size={16} />
    <input
      type="search"
      placeholder={title}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  </form>
);

SearchBar.propTypes = {
  title: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

SearchBar.defaultProps = {
  title: '',
  onChangeHandler: null,
};

export default SearchBar;
