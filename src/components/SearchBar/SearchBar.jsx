import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchBar.module.css';

const SearchBar = ({ title, onChangeHandler, onSearchAction }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchAction();
  };

  return (
    <form className={styles.searchbar} onSubmit={onSubmitHandler}>
      <AiOutlineSearch size={16} />
      <input
        type="search"
        placeholder={title}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  title: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onSearchAction: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  title: '',
  onChangeHandler: null,
};

export default SearchBar;
