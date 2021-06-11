import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLogo from '../../components/AuthLogo/AuthLogo';
import FormUpperContent from '../../components/FormUpperContent/FormUpperContent';
import styles from './Login.module.css';
import fetchWrapper from '../../utils/fetchWrapper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch.post = fetchWrapper('POST');
  }, []);

  const checkboxHandler = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch.post('/api/login', {
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.msg) throw new Error(data.msg);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </>
  );

  const renderInner = () => (
    <div className={styles.content}>
      <div className={styles.checkbox}>
        <input type="checkbox" defaultChecked={checked} onChange={checkboxHandler} />
        <span>Remember me</span>
      </div>
      <Link to="/auth/password/reset" className={styles.link}>Forgot your password?</Link>
    </div>
  );

  return (
    <section className="container">
      <div className="auth">
        <AuthLogo />
        <FormUpperContent type="login" />
        <AuthForm
          renderFields={renderFormFields}
          onSubmitHandler={onLoginHandler}
          submitTitle="Sign In"
          renderInnerContent={renderInner}
        />
      </div>
    </section>
  );
};

export default Login;
