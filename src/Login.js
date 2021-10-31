// import { auth } from 'firebase/app';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         console.log(auth);
        //     })
        //     .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
                    className='login_logo'
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE
                    CLONE conditions of Use & Sale. Please
                    see our Pivacy Notice, our Cookies Notice
                    and our Interest-Based ads Notice
                </p>

                <button onClick={register} className='login_registerButton'>Create your Amazon Accout</button>
            </div>
        </div>
    )
}
export default Login;
