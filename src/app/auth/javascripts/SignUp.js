'use client'
import React, { useState } from 'react';
import '../styles/SignUp.css';
const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUpOpen, setIsSignUpOpen] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);

        setFullName('');
        setEmail('');
        setPassword('');
    };
    const toggleSignUpOpen = () => {
        setIsSignUpOpen(!isSignUpOpen)
    }
    return (
        <>
            <section className='signUpSection'>
                <div className='signUpSectionContainer'>
                    <h2>NEPHARA</h2>
                    <p>Are you ready to design your style? </p>
                    {isSignUpOpen ?
                        <form>
                            <div className='signUpContainerInput' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    placeholder='Enter your name...'
                                />
                            </div>

                            <div className='signUpContainerInput' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email...'
                                    required
                                />
                            </div>
                            <div className='signUpContainerInput' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password...'
                                    required
                                />
                            </div>
                            <button className='signUpButton' onClick={handleSubmit}>Sign up</button>
                            <p className='signUpContainerLine'>OR</p>
                            <button className='signUpButtonGoogle' onClick={handleSubmit}>Sign up With Google</button>
                            <p className='signUpSectionBottomContent'>Already have an account? <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSignUpOpen}>Log in</span></p>

                        </form>
                        :
                        <form>
                            <div className='signUpContainerInput' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email...'
                                    required
                                />
                            </div>
                            <div className='signUpContainerInput' style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter password...'
                                    required
                                />
                            </div>
                            <button className='signUpButton' onClick={handleSubmit}>Log in</button>
                            <p className='signUpContainerLine'>OR</p>
                            <button className='signUpButtonGoogle' onClick={handleSubmit}>Continue With Google</button>
                            <p className='signUpSectionBottomContent'>Don't have an account? <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }} onClick={toggleSignUpOpen}>Sign up</span></p>

                        </form>}
                </div>

            </section>
        </>
    )
}

export default SignUp