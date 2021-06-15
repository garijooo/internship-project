import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    if (localStorage.getItem('auth-token')) console.log(localStorage.getItem('auth-token'));
  });

  return (
    <div>
      Profile
    </div>
  );
};

export default Profile;
