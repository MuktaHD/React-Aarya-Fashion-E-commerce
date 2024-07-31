
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/aaryafa.jpeg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Retrieve user data from localStorage
        let userData = localStorage.getItem('user');
        userData = JSON.parse(userData);

        // Check if the email and password match the stored user data
        if (userData && userData.email === email && userData.password === password) {
            // Successful login
            setError('');
            navigate('/dashboard');
        } else {
            // No user found or invalid credentials
            setError('Invalid email or password. Please register or try again.');
        }
    }

    const handleRegisterRedirect = () => {
        navigate('/register');
    }

    return (
        <div className="container-fluid" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-md-4">
                <div className="wrapper">
                    <div className="logo">
                    <img src={logo1} alt="Aarya Logo" style={{ width: '100px', margin: '0 auto', display: 'block' }} />
                        {/* <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="Twitter Logo" style={{ width: '100px', margin: '0 auto', display: 'block' }} /> */}
                    </div>
                    <div className="text-center mt-4 name">
                        Aarya Fashion
                    </div>
                    <form className="p-3 mt-3" onSubmit={handleSubmit}>
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary mt-3 btn-block" type="submit">Login</button>
                    </form>
                    <div className="text-center fs-6">
                        <a href="/">Forget password?</a> or <a href="/" onClick={handleRegisterRedirect}>Register</a>
                    </div>
                    {error && <p className="text-danger text-center mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
