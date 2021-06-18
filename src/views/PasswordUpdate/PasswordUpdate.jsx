import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormBottomContent from '../../components/FormBottomContent/FormBottomContent';

const PasswordUpdate = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onUpdatePasswordHandler = (e) => {
    e.preventDefault();
    window.console.log('password was updated!');
  };

  return (
    <section className="container">
      <div className="auth">
        <AuthLogo />
        <div className="content">
          <h2 className="title">
            Create new password
          </h2>
        </div>
        <AuthForm
          onSubmitHandler={onUpdatePasswordHandler}
          submitTitle="Reset password and Log in"
        >
          <input
            type="password"
            value={password}
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </AuthForm>
        <FormBottomContent />
      </div>
    </section>
  );
};

export default PasswordUpdate;
