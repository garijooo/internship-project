import React, { useState } from 'react';
import PropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';
import fetchWrapper from '../../utils/fetchWrapper';
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
      let response = await fetchWrapper.post('/api/user', {
        body: JSON.stringify({
          firstname: fname,
          lastname: lname,
          email,
          password,
        }),
      });
      let data = await response.json();
      if (data.msg) throw new Error(data.msg);
      try {
        response = await fetchWrapper.post('/api/login', {
          body: JSON.stringify({
            email: data.email,
            password,
          }),
        });
        data = await response.json();
        if (data.msg) throw new Error(data.msg);
        localStorage.setItem('auth-token', data.token);
        const { Email } = jwtDecode(data.token);
        dispatch(fetchUser(Email, data.token));
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
