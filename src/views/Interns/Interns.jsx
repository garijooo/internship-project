import React from 'react';
import PropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/auth/actions';
import PageContainer from '../../components/PageContainer/PageContainer';

const Interns = ({ history }) => {
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

Interns.propTypes = {
  history: PropTypes.history.isRequired,
};

export default Interns;
