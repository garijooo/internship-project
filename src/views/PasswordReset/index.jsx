import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm';
import AuthLogo from '../../components/AuthLogo';
import InputElement from '../../components/InputElement';
import FormBottomContent from '../../components/FormBottomContent';
import styles from './PasswordReset.module.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const onResetPasswordHandler = (e) => {
    e.preventDefault();
    window.console.log('reset password link was sent');
  };

  return (
    <section className="container">
      <div className="auth">
        <AuthLogo />
        <div className="content">
          <h2 className="title">
            Reset the password
          </h2>
          <span className={styles.description}>
            Enter your email so we can send you reset link
          </span>
        </div>
        <AuthForm
          onSubmitHandler={onResetPasswordHandler}
          submitTitle="Send a link"
        >
          <InputElement
            type="email"
            value={email}
            placeholder="Email"
            onChangeHandler={(value) => setEmail(value)}
            required
          />
        </AuthForm>
        <FormBottomContent />
      </div>
    </section>
  );
};

export default PasswordReset;
