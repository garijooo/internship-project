import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

//components
import AuthForm from '../auth/AuthForm';

import logo from '../../static/logo-akvelon.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const checkboxHandler = useCallback(() => {
        setChecked(!checked);
      }, [checked]);

    const onLoginHandler = e => {
        e.preventDefault();
        console.log('logged in!');
    }

    const renderFormFields = function () {
        return (
            <>
                <input type="email" value={email} placeholder="Email"
                    onChange={e => setEmail(e.target.value)} required
                />
                <input type="password" value={password} placeholder="Password"
                    onChange={e => setPassword(e.target.value)} required
                />
            </>
        );
    }

    const renderExtra = function () {
        return (
            <div className="auth__bottom_content">
                <div className="auth__bottom_content__select">
                    <input type="checkbox" defaultChecked={checked} onChange={checkboxHandler} />
                    <span>Remember me</span>
                </div>
                <Link to="/auth/password/reset" className="auth__bottom_content__link">Forgot your password?</Link>
            </div>
        );
    }

    return (
        <section className="container">
            <div className="auth">
                <div className="auth__logo">
                    <img src={logo} alt="logo-akvelon" />
                </div>
                <div className="auth__upper_content">
                    <h2 className="auth__upper_content__title selected">
                        Login
                </h2>
                    <h2 className="auth__upper_content__title">
                        <Link to="/auth/signup">
                            Sign Up
                        </Link>
                    </h2>
                    <div className="auth__upper_content__space"></div>
                </div>
                <AuthForm renderFields={renderFormFields} onSubmitHandler={onLoginHandler}
                    submitTitle="Sign In" renderExtraContent={renderExtra}
                />
            </div>
        </section>
    );
}

export default Login;