import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Redirect } from 'react-router-dom';
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
    if (!localStorage.getItem('auth-token')) history.push('/auth/login');
    if (!user.ID) {
      const { Email } = jwtDecode(localStorage.getItem('auth-token'));
      dispatch(fetchUser(Email, localStorage.getItem('auth-token')));
    }
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    dispatch(signOut());
    history.push('/auth/login');
  };

  const onSearchChange = (e) => {
    setSearchingValue(e.target.value);
    console.log(searchingValue);
  };

  if (!localStorage.getItem('auth-token')) return <Redirect to="/auth/login" />;
  return (
    <Grid>
      <StreamsHeader />
      <SearchBar title="Search stream" onChangeHandler={onSearchChange} value={searchingValue} />
      <section>
        Streams
        <button onClick={signOutHandler} type="button">
          exit
        </button>
        {children}
      </section>
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
