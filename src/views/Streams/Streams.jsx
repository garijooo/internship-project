import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { fetchUser, signOut } from '../../store/actions';

const Streams = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.ID) {
      let data;
      if (localStorage.getItem('auth-token')) data = jwtDecode(localStorage.getItem('auth-token'));
      else data = jwtDecode(sessionStorage.getItem('auth-token'));
      const { Email } = data;
      dispatch(fetchUser(Email, sessionStorage.getItem('auth-token')));
    }
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    sessionStorage.removeItem('auth-token');
    dispatch(signOut());
    history.push('/auth/login');
  };

  return (
    <div>
      Streams
      <button
        onClick={signOutHandler}
        type="button"
      >
        exit
      </button>
      <h2>
        {`${user.firstname} ${user.lastname}`}
      </h2>
      <Link to="/test">Dashboard</Link>
    </div>
  );
};

export default Streams;
