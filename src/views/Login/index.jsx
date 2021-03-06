import React, {
  useState, useRef,
} from 'react';
import PropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import AuthLogo from '../../components/AuthLogo';
import InputElement from '../../components/InputElement';
import FormUpperContent from '../../components/FormUpperContent';
import styles from './Login.module.css';
import fetchWrapper from '../../utils/fetchWrapper';
import { fetchUser } from '../../store/auth/actions';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const checked = useRef(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWrapper.post('/api/Account/SignIn', {}, {
        email,
        password,
      });
      if (data.msg) throw new Error(data.msg);
      if (data.success) {
        if (checked.current.checked) {
          localStorage.setItem('auth-token', data.token);
        } else sessionStorage.setItem('auth-token', data.token);
        dispatch(fetchUser(data.token));
        history.push('/streams/current');
      } else throw new Error(data.errors);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <section className="container">
      <div className="auth">
        <AuthLogo />
        <FormUpperContent type="login" />
        <AuthForm
          onSubmitHandler={onLoginHandler}
          submitTitle="Sign In"
          error={error}
        >
          <InputElement
            type="email"
            value={email}
            onChangeHandler={(value) => setEmail(value)}
            placeholder="Email"
            required
          />
          <InputElement
            type="password"
            value={password}
            onChangeHandler={(value) => setPassword(value)}
            placeholder="Password"
            required
          />
          <div className={styles.content}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                defaultChecked={checked.current.checked}
                ref={checked}
              />
              <span>Remember me</span>
            </div>
            <Link to="/auth/password/reset" className={styles.link}>Forgot your password?</Link>
          </div>
        </AuthForm>
      </div>
    </section>
  );
};

Login.propTypes = {
  history: PropTypes.history.isRequired,
};

export default Login;
