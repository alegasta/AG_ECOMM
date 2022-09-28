import React from 'react'
import { Link } from 'react-router-dom'
import './itemCartVacio.css'

const ItemCartVacio = () => {
  return (
    <div className='contenedor-carrito-vacio'>
        <h4 className='titulo-carrito-vacio'>Aún no hay productos en tu carrito!</h4>
        <h5>Te invitamos a que veas nuestros productos disponibles.</h5>
        <Link to='/productos'>
            <p className='link-ver-productos'>
                Ver productos
            </p>

        </Link>
    </div>
  )
}

export default ItemCartVacio