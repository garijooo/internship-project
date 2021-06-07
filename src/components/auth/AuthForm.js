import React from 'react';

const AuthForm = props => {

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log('form was submitted');
    }

    return (
        <form onSubmit={onSubmitHandler} >
            
        </form>
    );
}

export default AuthForm;