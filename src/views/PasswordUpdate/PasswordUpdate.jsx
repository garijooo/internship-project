import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import FormBottomContent from '../../components/FormBottomContent/FormBottomContent';
import logo from '../../assets/images/logo-akvelon.png';

const PasswordUpdate = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onUpdatePasswordHandler = (e) => {
    e.preventDefault();
    window.console.log('password was updated!');
  };

  const renderFormFields = () => (
    <>
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
    </>
  );

  return (
    <section className="container">
      <div className="auth">
        <div className="logo">
          <img src={logo} alt="logo-akvelon" />
        </div>
        <div className="content">
          <h2 className="title">
            Create new password
          </h2>
        </div>
        <AuthForm renderFields={renderFormFields} onSubmitHandler={onUpdatePasswordHandler} submitTitle="Reset password and Log in" />
        <FormBottomContent />
      </div>
    </section>
  );
};

export default PasswordUpdate;
