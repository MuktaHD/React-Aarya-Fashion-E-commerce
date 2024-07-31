
import './App.css';


import Navbar from './components/Navbar';
import ProductAPI from './components/ProductAPI';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

import Register from './components/Register';
import { useState, useEffect } from "react";

import { BrowserRouter as  Router, Route, Routes ,Navigate} from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';

  function App() {
    const [view,setView]=useState("register")
   
    const [cartItems, setCartItems] = useState([]);
    
    const handleOrderSubmit = (address, paymentMethod) => {
      // Implement order submission logic here
      alert(`Order placed successfully!\nAddress: ${address}\nPayment Method: ${paymentMethod}\nTotal Price: $${cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2)}`);
      setCartItems([]); // Clear the cart after order is placed
    };

    const [productsAPI, setproductsAPI] = useState([]);
    useEffect(() => {
      const apiCall = ()=>{
      fetch("https://fakestoreapi.com/products?limit=20")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setproductsAPI(data);
        });
      };
      apiCall();
    },[]);
  console.log(productsAPI);



  const cartCount = cartItems.length;
  return (

    <>

  <div>
  <Navbar cartCount={cartCount} />
      <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register setView={() => {/* navigate to login */}} />} />
          <Route path="/dashboard" element={<Dashboard data={productsAPI} setCartItems={setCartItems} />} />
          <Route path="/dashboard/:id/*" element={<ProductAPI data={productsAPI} setCartItems={setCartItems} />} />
         
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Add Cart Route */}
     

          <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)} handleOrderSubmit={handleOrderSubmit} />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
   
      </div>
    </>
  );
}

export default App;


