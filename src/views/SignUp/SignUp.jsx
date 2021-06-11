import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';

const SignUp = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignUpHandler = (e) => {
    e.preventDefault();
    window.console.log('signed up!');
  };

  const renderFormFields = () => (
    <>
      <input
        type="text"
        value={fname}
        placeholder="First name"
        onChange={(e) => setFname(e.target.value)}
        required
      />
      <input
        type="text"
        value={lname}
        placeholder="Last name"
        onChange={(e) => setLname(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="Password(6 digits at least, case sensitive)"
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
        <AuthLogo />
        <FormUpperContent type="signup" />
        <AuthForm
          renderFields={renderFormFields}
          onSubmitHandler={onSignUpHandler}
          submitTitle="Register"
        />
      </div>
    </section>
  );
};

export default SignUp;
