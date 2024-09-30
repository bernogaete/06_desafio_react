import React, { useState } from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Pizza from './pages/Pizza';
import Cart from './pages/Cart';
import pizzas from './script/pizzas';


function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 0 })));

  const calcularTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);
  };

  return (
    <>
      <div>
        <Navbar 
          setCurrentView={setCurrentView} 
          total={calcularTotal()} 
        />
        
      
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/pizza/p001' element={<Pizza />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
