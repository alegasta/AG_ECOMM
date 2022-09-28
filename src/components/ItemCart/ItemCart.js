import React from 'react'
import './itemCart.css'
import {MdDelete} from 'react-icons/md'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {
  const {removeProduct} = useCartContext();
  return (
    <div className='container contenedor-item-cart mt-4'>
        <div>
            <img src={product.imagen} alt={product.modelo} className='img-fluid img-item-cart' />
        </div>
        <div className='my-auto'>
            <h4>{product.producto + ' ' + product.marca}</h4>
            <h5>{product.modelo}</h5>
            <h6>Cantidad: {product.quantity}</h6>
            <h6>Precio unitario: ${product.precio}.-</h6>
            <h6>Subtotal: ${product.precio*product.quantity}.-</h6>
        </div>
        <div className='my-auto icono-eliminar-producto' onClick={() => removeProduct(product.id) }>
          {<MdDelete />}
        </div>
    </div>
  )
}

export default ItemCart