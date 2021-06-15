import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { fetchUser as fetchUserStore } from '../../store/actions';

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchUser = () => {
    const { Email } = jwtDecode(localStorage.getItem('auth-token'));
    dispatch(fetchUserStore(Email, localStorage.getItem('auth-token')));
  };

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) history.push('/auth/login');
    else fetchUser();
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    history.push('/auth/login');
  };

  return (
    <div>
      Profile
      <button
        onClick={signOutHandler}
        type="button"
      >
        exit
      </button>
    </div>
  );
};

export default Profile;
