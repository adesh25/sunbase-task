import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            mobile: mobile,
            userName: userName,
            password: password
        };
        axios.post('http://localhost:8080/signUp', newUser)
            .then(response => {
                console.log(response.data);
                setSuccessMessage('Sign Up successfully !!');
            })
            .catch(error => {
                console.error('Not registered ', error);
                setSuccessMessage('Error registering user');
            });
        setName('');
        setEmail('');
        setMobile('');
        setUserName('');
        setPassword('');
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <h5 className="card-header">User Registration</h5>
                        <div className="card-body">
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-6 text-center">
                    <h5>Have an account? <a href="/">Sign In</a></h5>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
