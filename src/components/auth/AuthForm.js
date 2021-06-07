import React, { useEffect } from 'react';

import history from '../../history';

const AuthForm = ({renderFields, onSubmitHandler, submitTitle, renderExtraContent}) => {
    useEffect(() => {
        if(localStorage.getItem("auth-token")) history.push('/');
    }, []);

    return (
        <form onSubmit={onSubmitHandler} className="auth__form">
            {renderFields()}
            {renderExtraContent && renderExtraContent()}
            <input type="submit" onSubmit={onSubmitHandler} value={submitTitle} />
        </form>
    );
}

export default AuthForm;