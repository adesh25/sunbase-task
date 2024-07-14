import React, { useState } from 'react';
import axios from 'axios';
import Home from '../../Home';

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/signIn', null, { params: { userName, password } })
            .then(response => {
                console.log(response.data);
                if (response.data === 'Login successful') {
                    setSuccessMessage('Login successful');
                    setErrorMessage('');
                    setLoggedIn(true); 
                } else {
                    setErrorMessage('Invalid credentials');
                    setSuccessMessage('');
                }
            })
            .catch(error => {
                console.error('Error logging in', error);
                setErrorMessage('Error logging in');
                setSuccessMessage('');
            });
        setUserName('');
        setPassword('');
    };

    if (loggedIn) {
        return <Home />;
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <h5 className="card-header">Login</h5>
                        <div className="card-body">
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-6 text-center">
                    <h5>New User? <a href="/signup">Sign Up</a></h5>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
