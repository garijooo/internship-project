import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions';
import PageContainer from '../../components/PageContainer/PageContainer';

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
    <PageContainer>
      Interns
      <button onClick={signOutHandler} type="button">
        exit
      </button>
    </PageContainer>
  );
};

export default Interns;
