import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components
import AuthForm from './AuthForm';

import logo from '../../static/logo-akvelon.png';

const PasswordReset = () => {
    const [email, setEmail] = useState('');

    const onResetPasswordHandler = e => {
        e.preventDefault();
        console.log('reset password link was sent');
    }
    
    const renderFormFields = function() {
        return (
            <>
            <input type="email" value={email} placeholder="Email"
                onChange={e => setEmail(e.target.value)} required
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
                        Reset the password
                    </h2>
                    <span className="auth__upper_content__description">
                        Enter your email so we can send you reset link
                    </span>
                </div>
                <AuthForm renderFields={renderFormFields} onSubmitHandler={onResetPasswordHandler}
                    submitTitle="Send a link" 
                />
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

export default PasswordReset;