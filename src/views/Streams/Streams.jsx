import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Grid from '../../components/Grid/Grid';
import { fetchUser, signOut } from '../../store/actions';
import StreamsHeader from '../../components/StreamsHeader/StreamsHeader';
import SearchBar from '../../components/SearchBar/SearchBar';

const Streams = ({ children }) => {
  const [searchingValue, setSearchingValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.ID) {
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
    <Grid>
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
    </Grid>
  );
};

Streams.propTypes = {
  children: PropTypes.node,
};

Streams.defaultProps = {
  children: null,
};

export default Streams;
