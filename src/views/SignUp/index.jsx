import React, { useState } from 'react';
import PropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import AuthLogo from '../../components/AuthLogo';
import InputElement from '../../components/InputElement';
import FormUpperContent from '../../components/FormUpperContent';
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
      let data = await fetchWrapper.post('/api/Account/Registration', {}, {
        email,
        firstname: fname,
        lastname: lname,
        password,
        confirmPassword,
        imagePath: '',
      });
      try {
        data = await fetchWrapper.post('/api/Account/SignIn', {}, {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem('auth-token', data.token);
          dispatch(fetchUser(data.token));
          history.push('/streams/current');
        } else throw new Error(data.errors);
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
          <InputElement
            type="text"
            value={fname}
            placeholder="First name"
            onChangeHandler={(value) => setFname(value)}
            required
          />
          <InputElement
            type="text"
            value={lname}
            placeholder="Last name"
            onChangeHandler={(value) => setLname(value)}
            required
          />
          <InputElement
            type="email"
            value={email}
            placeholder="Email"
            onChangeHandler={(value) => setEmail(value)}
            required
          />
          <InputElement
            type="password"
            value={password}
            placeholder="Password(6 digits at least, case sensitive)"
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
      </div>
    </section>
  );
};

SignUp.propTypes = {
  history: PropTypes.history.isRequired,
};

export default SignUp;
