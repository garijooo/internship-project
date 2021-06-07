import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthForm from './AuthForm';

import logo from '../../static/logo-akvelon.png';

const PasswordNew = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onUpdatePasswordHandler = e => {
        e.preventDefault();
        console.log('password was updated!');
    }

    const renderFormFields = function () {
        return (
            <>
                <input type="password" value={password} placeholder="New password"
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
                <div className="auth__upper_content horizontal">
                    <h2 className="auth__upper_content__title clean">
                        Create new password
                    </h2>
                </div>
                <AuthForm renderFields={renderFormFields} onSubmitHandler={onUpdatePasswordHandler} submitTitle="Reset password and Log in" />
                <div className="auth__bottom_content">
                    <span>
                        Remembered your password?
                        <Link to="/auth/login" className="auth__bottom_content__link"> Back to Log in</Link>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default PasswordNew;