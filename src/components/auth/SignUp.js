import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './AuthForm';

import logo from '../../static/logo-akvelon.png';

const SignUp = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSignUpHandler = e => {
        e.preventDefault();
        console.log('signed up!');
    }

    const renderFormFields = function () {
        return (
            <>
                <input type="text" value={fname} placeholder="First name"
                    onChange={e => setFname(e.target.value)} required
                />
                <input type="text" value={lname} placeholder="Last name"
                    onChange={e => setLname(e.target.value)} required
                />
                <input type="email" value={email} placeholder="Email"
                    onChange={e => setEmail(e.target.value)} required
                />
                <input type="password" value={password} placeholder="Password(6 digits at least, case sensitive)"
                    onChange={e => setPassword(e.target.value)} required
                />
                <input type="password" value={confirmPassword} placeholder="Confirm password"
                    onChange={e => setConfirmPassword(e.target.value)} required
                />
            </>
        );
    }



    return (
        <section className="container">
            <div className="auth">
                <div className="auth__logo">
                    <img src={logo} alt="logo-akvelon" />
                </div>
                <div className="auth__upper_content">
                    <h2 className="auth__upper_content__title">
                        <Link to="/auth/login">
                            Login
                    </Link>
                    </h2>
                    <h2 className="auth__upper_content__title selected">
                        Sign Up
                </h2>
                    <div className="auth__upper_content__space"></div>
                </div>
                <AuthForm renderFields={renderFormFields} onSubmitHandler={onSignUpHandler} submitTitle="Register" />
            </div>
        </section>
    );
}

export default SignUp;