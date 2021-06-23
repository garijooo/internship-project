import React, { useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { fetchUser, signOut } from '../../store/actions';

const Profile = () => {
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

  if (!localStorage.getItem('auth-token')) return <Redirect to="/auth/login" />;
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
