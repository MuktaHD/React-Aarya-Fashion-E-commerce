import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/aaryafa.jpeg';

const Register = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate(); 

  const payLoad = { userName, email, password };


  
  const handleSubmit = () => {
    if (email !== '' && password !== '' && userName !== '') {
      toast.success('Registration successful');
      navigate('/login');
      setTimeout(() => {
        setView("login");
      }, 2000);
      localStorage.setItem("user", JSON.stringify(payLoad));
    } else {
      toast.error('Error while registering');
    }
  };

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
          <form className="p-3 mt-3" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="form-field d-flex align-items-center mb-3">
              <span className="far fa-user"></span>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center mb-3">
              <span className="far fa-envelope"></span>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center mb-3">
              <span className="fas fa-key"></span>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary mt-3 btn-block" type="submit">Register</button>
          </form>
          <div className="text-center fs-6 mt-3">
            <a href="/">Forget password?</a> or <a href="/">Sign up</a>
          </div>
          {email && password && userName ? (
            <div className="mt-3">
              <p>Your Name: {userName}</p>
              <p>Your Email: {email}</p>
              <p>Password: {password}</p>
            </div>
          ) : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
