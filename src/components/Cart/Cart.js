import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCartVacio from '../ItemCart/ItemCartVacio';
import {BsCart} from 'react-icons/bs'
import './cart.css'
import { Link } from 'react-router-dom';


const Cart = () => {
  const {totalPrice, productosCarrito, cart, clearCart} = useCartContext();
  if ( cart.length === 0 ){
    return(
      <>
        <ItemCartVacio />
      </>
    )
  } else {
    return(
      <div>
        <div className='contenedor-icono-titulo mx-auto my-4'>
          <BsCart />
          <h2>Tus compras!</h2>
        </div>
        {productosCarrito()}
        <div className='precio-total'>
          <h4>Total: ${totalPrice()}.-</h4>
        </div>
        <div>
        <Link to='/'>
            <button className='btn-seguir-comprando'>Seguir comprando</button>
          </Link>
          <Link to='/shop'>
          <button className='btn-finalizar-compra'>
            Finalizar compra
          </button>
          </Link>
          <button className='btn-limpiar-carrito' onClick={clearCart}>Limpiar carrito</button>
        </div>

      </div>

    )
  }
}

export default Cart