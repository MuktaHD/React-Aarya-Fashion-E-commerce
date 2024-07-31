

import React from 'react';
import { useParams, Routes, Route, Link } from 'react-router-dom';
import './Dashboard'
import StarRating from './StarRating';

const ProductAPI = ({ data ,setCartItems}) => {

    const addToCart = (product) => {
      setCartItems(prevItems => [...prevItems, product]);
    };
  const { id } = useParams();
  const product = data.find((element) => element.id === parseInt(id, 10)); 

  if (!product) {
    return <p>Product Not found</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button> &nbsp;&nbsp;
          <Link to='rating' className="btn btn-secondary ml-2">Rating</Link>
          <div>
          <Routes>
        <Route path='rating' element={<Rating product={product} />} />
      </Routes>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

const Rating = ({ product }) => {
  return (
    <div>
      <h4 style={{display:"flex" , justifyContent:"center"}}>Rating</h4>
      <StarRating rating={product.rating.rate} />
      <p>Count: {product.rating.count}</p>
    </div>
  );
};

export default ProductAPI;
