import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import AuthLogo from '../../components/AuthLogo';
import InputElement from '../../components/InputElement';
import FormBottomContent from '../../components/FormBottomContent';

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
          <InputElement
            type="password"
            value={password}
            placeholder="New password"
            onChangeHandler={(value) => setPassword(value)}
            required
          />
          <InputElement
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            onChangeHandler={(value) => setConfirmPassword(value)}
            required
          />
        </AuthForm>
        <FormBottomContent />
      </div>
    </section>
  );
};

export default PasswordUpdate;
