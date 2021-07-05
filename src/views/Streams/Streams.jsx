import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  fetchUser,
} from '../../store/auth/actions';
import { updateSearchingValue } from '../../store/options/actions';
import PageContainer from '../../components/PageContainer/PageContainer';
import StreamsHeader from '../../components/StreamsHeader/StreamsHeader';
import SearchBar from '../../components/SearchBar/SearchBar';

const Streams = (
  { children },
) => {
  const [searchingValue, setSearchingValue] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.ID) {
      let token;
      if (localStorage.getItem('auth-token')) token = localStorage.getItem('auth-token');
      else token = sessionStorage.getItem('auth-token');
      const data = jwtDecode(token);
      const { Email } = data;
      dispatch(fetchUser(Email, token));
    }
  }, []);

  const onSearchChange = (searchedValue) => {
    setSearchingValue(searchedValue);
    dispatch(updateSearchingValue(searchedValue));
    console.log(searchingValue);
  };

  return (
    <PageContainer>
      <StreamsHeader />
      <SearchBar
        title="Search stream"
        onChangeHandler={onSearchChange}
        value={searchingValue}
      />
      {children}
    </PageContainer>
  );
};

Streams.propTypes = {
  children: PropTypes.node,
};

Streams.defaultProps = {
  children: null,
};

export default Streams;
