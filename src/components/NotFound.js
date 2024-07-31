


import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 
import logo2 from '../assets/NotFound.png'; 

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={logo2} alt="Logo" className="logoNot" />
      <Link to="/" className="back-home">Go to Home</Link>
    </div>
  );
};

export default NotFound;
