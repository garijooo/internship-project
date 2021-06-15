import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Profile = () => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) history.push('/auth/login');
  });

  const signOut = () => {
    localStorage.removeItem('auth-token');
    history.push('/auth/login');
  };

  return (
    <div>
      Profile
      <button
        onClick={signOut}
        type="button"
      >
        exit
      </button>
    </div>
  );
};

export default Profile;
