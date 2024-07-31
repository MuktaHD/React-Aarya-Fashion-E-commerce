



import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ data, setCartItems }) => {
  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            {/* <Link to={`/dashboard/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
              <div className="card" style={{ border: "1px solid black", cursor: 'pointer' }}>
                <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button> &nbsp;&nbsp;
                  <button className="btn btn-secondary ml-2"> 
                    <Link to={`/dashboard/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>More Info</Link>
                  </button>
                </div>
              </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
