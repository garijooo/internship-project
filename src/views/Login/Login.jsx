import React, {
  useRef,
} from 'react';
import PropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';
import styles from './Login.module.css';
import fetch from '../../utils/fetchWrapper';
import { fetchUser } from '../../store/auth/actions';

const Login = ({ history }) => {
  const email = useRef('');
  const password = useRef('');
  const checked = useRef(false);
  const dispatch = useDispatch();

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch.post('/api/login', {
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });
      const data = await response.json();
      if (data.msg) throw new Error(data.msg);
      if (checked.current.checked) localStorage.setItem('auth-token', data.token);
      else sessionStorage.setItem('auth-token', data.token);
      const { Email } = jwtDecode(data.token);
      dispatch(fetchUser(Email, data.token));
      history.push('/streams/current');
    } catch (error) {
      console.log(error);
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
        >
          <input
            type="email"
            value={email.current.value}
            placeholder="Email"
            required
            ref={email}
          />
          <input
            type="password"
            value={password.current.value}
            placeholder="Password"
            required
            ref={password}
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
