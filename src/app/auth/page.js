import React from 'react';
import LogIn from './javascripts/LogIn';
import AuthImage from './javascripts/AuthImage';
import SignUp from './javascripts/SignUp';

const AuthPage = () => {
    return (
        <>
            <div className='authPage'
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100vh',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <SignUp />
                <AuthImage />
            </div>
        </>
    )
}

export default AuthPage;