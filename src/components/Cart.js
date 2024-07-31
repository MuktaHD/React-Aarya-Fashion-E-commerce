

import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (itemId, amount) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(1, (cartItem.quantity || 1) + amount) }
          : cartItem
      )
    );
  };

  const handleRemove = (itemId) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== itemId));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={item.image} className="card-img" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text"><small className="text-muted">Product ID: {item.id}</small></p>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Total: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary btn-sm mr-1"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        -
                      </button>
                      &nbsp;&nbsp;
                      <span className="mr-1">{item.quantity || 1}</span>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-danger btn-sm ml-3"
                        onClick={() => handleRemove(item.id)}
                      >
                        <RiDeleteBin6Fill />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="fixed-top-right">
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
          <div className="fixed-top-right">
            <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


