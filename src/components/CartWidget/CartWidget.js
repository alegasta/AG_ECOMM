import React from 'react'
import {BsCart} from 'react-icons/bs'
import './cartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {totalProducts} = useCartContext()
  
  return (
    <div className='contenedor-icono'>
        <Link to='/carrito' className='carrito'>
          <BsCart className='icono-carrito' />
        </Link>
        <div className='cantidad-elementos'>{totalProducts()}</div>
    </div>
  )
}

export default CartWidget