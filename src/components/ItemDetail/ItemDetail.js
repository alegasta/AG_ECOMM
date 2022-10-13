import React, {useState} from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const ItemDetail = ({info}) => {

  const {addProduct} = useCartContext();
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (cantidad) =>{
    setGoToCart(true);
    addProduct(info, cantidad);
  }
  
  return (
    <div className='row container mx-auto my-4'>
        <div className='col-md-6 my-auto'>
            <img src={info.img} alt={info.producto} className='img-fluid' />
        </div>
        <div className='col-md-6 my-auto'>
            <h3 className='text-uppercase'>{info.producto}</h3>
            <p>{info.descripcion}</p>
            <div className='lista-detalle'>
                <p>Marca: {info.marca}</p>
                <p>Modelo: {info.modelo}</p>
                <p>Stock: {info.stock}</p>
                <h5 className='precio-detalle'>Precio: ${info.precio}</h5>
            </div>
            {
              goToCart ? <div>
                <Link to='/carrito' className='btn-detalle mb-3 mx-2'>Terminar compra</Link>
                <Link to='/' className='btn-detalle mb-3 mx-2'>Ver más productos</Link>
                </div> 
                : 
                <ItemCount initial={1} stock={info.stock} onAdd = {onAdd} />
            }
        </div>
    </div>
  )
}

export default ItemDetail