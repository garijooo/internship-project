import React, { useState, useEffect } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';
import fetchWrapper from '../../utils/fetchWrapper';

const SignUp = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    fetch.post = fetchWrapper('POST');
  });

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) throw new Error('passwords didn\'t match');
      const response = await fetch.post('/api/user', {
        body: JSON.stringify({
          firstname: fname,
          lastname: lname,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.msg) throw new Error(data.msg);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container">
      <div className="auth">
        <AuthLogo />
        <FormUpperContent type="signup" />
        <AuthForm
          onSubmitHandler={onSignUpHandler}
          submitTitle="Register"
        >
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
        </AuthForm>
      </div>
    </section>
  );
};

export default SignUp;
