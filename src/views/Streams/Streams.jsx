import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { fetchUser, signOut } from '../../store/auth/actions';
import PageContainer from '../../components/PageContainer/PageContainer';
import StreamsHeader from '../../components/StreamsHeader/StreamsHeader';
import SearchBar from '../../components/SearchBar/SearchBar';

const Streams = ({ children }) => {
  const [searchingValue, setSearchingValue] = useState('');
  const history = useHistory();
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

  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    sessionStorage.removeItem('auth-token');
    dispatch(signOut());
    history.push('/auth/login');
  };

  const onSearchChange = (e) => {
    setSearchingValue(e.target.value);
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
      <button onClick={signOutHandler} type="button">
        exit
      </button>
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
