import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/auth/actions';
import PageContainer from '../../components/PageContainer';

const Interns = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutHandler = () => {
    localStorage.removeItem('auth-token');
    sessionStorage.removeItem('auth-token');
    dispatch(signOut());
    history.push('/auth/login');
  };

  return (
    <PageContainer>
      Interns
      <button onClick={signOutHandler} type="button">
        exit
      </button>
    </PageContainer>
  );
};

export default Interns;
