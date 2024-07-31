


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/aarya1.png'; 
import ThemeToggle from './ThemeChange'; 
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount, isLoggedIn, handleLogout }) => {
  const location = useLocation();

  return (
    <div className="nav">
      <div className="left">
        <img src={logo} alt="Logo" className="logoImg" />
      </div>
      <div className="right">
        {!isLoggedIn && (
          <>
            <Link to="/register" className="BTN">Register</Link>
            <Link to="/login" className="BTN">Login</Link>
          </>
        )}
        {isLoggedIn && location.pathname !== '/dashboard' && (
          <Link to="/dashboard" className="BTN">Dashboard</Link>
        )}
        {isLoggedIn && location.pathname === '/dashboard' && (
          <button className="BTN logout-btn" onClick={handleLogout}>Logout</button>
        )}
        <Link to="/cart" className="Cart-btn">
          <FaShoppingCart /> <span className="cart-badge">{cartCount}</span>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;


