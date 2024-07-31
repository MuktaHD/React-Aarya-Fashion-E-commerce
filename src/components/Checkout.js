


import React, { useState } from 'react';
import './Checkout.css'; 
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, totalPrice, handleOrderSubmit }) => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrderSubmit(address, paymentMethod);
    
    // Print order details
    window.print();
    
    // Refresh page after printing
    window.location.reload();
  };

  const handleLogout = () => {
    // Clear any session or user data
    localStorage.removeItem('user');
    
    // Redirect to the home or registration page
    navigate('/register');
  };

  return (
    <div className="container1 mt-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="address">Shipping Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="paymentMethod">Payment Method</label>
          <input
            type="text"
            className="form-control"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
        </div>
        <div className="total-price">
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
        <button type="submit" className="btn btn-primary1">Place Order</button>
      </form>
      <button className="btn btn-secondary mt-3" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Checkout;
