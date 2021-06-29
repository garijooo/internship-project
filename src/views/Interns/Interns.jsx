import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions';
import Grid from '../../components/Grid/Grid';

const Interns = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    sessionStorage.removeItem('auth-token');
    dispatch(signOut());
    history.push('/auth/login');
  };

  return (
    <Grid>
      Interns
      <button onClick={signOutHandler} type="button">
        exit
      </button>
    </Grid>
  );
};

export default Interns;
