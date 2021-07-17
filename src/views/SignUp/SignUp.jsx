import React, { useState } from 'react';
import PropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';
import fetchWrapper from '../../utils/fetchWrapper';
import getEmail from '../../utils/jwtDecoder';
import { fetchUser } from '../../store/auth/actions';

const SignUp = ({ history }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) throw new Error('passwords didn\'t match');
      let data = await fetchWrapper.post('/api/user', {
        firstname: fname,
        lastname: lname,
        email,
        password,
      });
      if (data.msg) throw new Error(data.msg);
      try {
        data = await fetchWrapper.post('/api/login', {
          email: data.email,
          password,
        });
        if (data.msg) throw new Error(data.msg);
        localStorage.setItem('auth-token', data.token);
        dispatch(fetchUser(getEmail(data.token), data.token));
        history.push('/streams/current');
      } catch (err) {
        setError(err.message);
      }
    } catch (err) {
      setError(err.message);
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
          error={error}
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

SignUp.propTypes = {
  history: PropTypes.history.isRequired,
};

export default SignUp;
