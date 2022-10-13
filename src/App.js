//COMPONENTS
import './App.css';
import BarraNavegacion from './components/Navbar/Navbar';
import React from 'react';
import CartProvider from './context/CartContext';

// REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//VISTAS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Carrito from './views/Carrito/Carrito';
import Shop from './views/Shop/Shop';


function App() {
  return (
    <Router>
      <div className="App">
        <BarraNavegacion />
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categoria/:categoriaId' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail/:detalleId' element={<ProductDetail />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/shop' element={<Shop />} />
          </Routes> 
        </CartProvider>     
      </div>
    </Router>
    
  );
}

export default App;
