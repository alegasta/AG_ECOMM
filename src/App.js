//COMPONENTS
import './App.css';
import BarraNavegacion from './components/Navbar/Navbar';
import React from 'react';
import CartProvider from './context/CartContext';

// REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//VISTAS
import Home from './views/Home/Home';
import Productos from './views/Productos/Productos';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Carrito from './views/Carrito/Carrito';


function App() {
  return (
    <Router>
      <div className="App">
        <BarraNavegacion />
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail/:id' element={<ProductDetail />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes> 
        </CartProvider>     
      </div>
    </Router>
    
  );
}

export default App;
