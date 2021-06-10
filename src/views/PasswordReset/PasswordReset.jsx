import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import FormBottomContent from '../../components/FormBottomContent/FormBottomContent';
import logo from '../../assets/images/logo-akvelon.png';
import styles from './PasswordReset.module.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const onResetPasswordHandler = (e) => {
    e.preventDefault();
    window.console.log('reset password link was sent');
  };

  const renderFormFields = () => (
    <>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
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
            Reset the password
          </h2>
          <span className={styles.description}>
            Enter your email so we can send you reset link
          </span>
        </div>
        <AuthForm
          renderFields={renderFormFields}
          onSubmitHandler={onResetPasswordHandler}
          submitTitle="Send a link"
        />
        <FormBottomContent />
      </div>
    </section>
  );
};

export default PasswordReset;
