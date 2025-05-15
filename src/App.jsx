// import {useState} from 'react'
// import "./index.css"; // Or your CSS file location
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// import Footer from './components/Footer/Footer'
// import LogIn from './components/LogIn/LogIn'

// const App = () => {

//   const [showLogin, setShowLogin] = useState(false)

//   return (
//     <>
//     {showLogin?<LogIn setShowLogin={setShowLogin}/>:<></>}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin}/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/order' element={<PlaceOrder />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>

//   )
// }

// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Only Routes/Route now
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LogIn from './components/LogIn/LogIn';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {showLogin && <LogIn setShowLogin={setShowLogin} />}
      <Footer />
    </div>
  );
};

export default App;

