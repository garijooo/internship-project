import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';
import styles from './Login.module.css';
import fetch from '../../utils/fetchWrapper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  const checkboxHandler = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch.post('/api/login', {
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.msg) throw new Error(data.msg);
      localStorage.setItem('auth-token', data.token);
      console.log(1);
      history.push('/');
      console.log(2);
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
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.content}>
            <div className={styles.checkbox}>
              <input type="checkbox" defaultChecked={checked} onChange={checkboxHandler} />
              <span>Remember me</span>
            </div>
            <Link to="/auth/password/reset" className={styles.link}>Forgot your password?</Link>
          </div>
        </AuthForm>
      </div>
    </section>
  );
};

export default Login;
