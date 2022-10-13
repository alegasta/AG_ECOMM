import React, {useState} from 'react'
import './shop.css'
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import MensajeVenta from '../../components/MensajeVenta/MensajeVenta';


const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
}


const Shop = () => {
    const [values, setValues] = useState(initialState)
    const [ventaId, setVentaId] = useState('');
    const [error, setError] = useState(false)

    const  handleOnChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'ventas'), {
            values, 
        });
        setVentaId(docRef.id);
        setValues(initialState);
    }

  return (
    <div className='shop-background'>
        {ventaId ? <MensajeVenta mensaje={ventaId} /> : <div>
            <h1 className='pt-4 shop-titulo'>Ya casi es tuyo ese producto que tanto queres!</h1>
        <h4 className='shop-subtitulo'>Completá el formulario con tus datos para finalizar la compra</h4>
        <form className='shop-contenedor-formulario container' onSubmit={onSubmit} >
            {error && 'No pueden haber campos vacios'}
            <input 
                type='text' 
                placeholder='Nombre' 
                name='nombre' 
                className='shop-item' 
                value={values.nombre}
                onChange={handleOnChange}
            />

            <input 
            type='text' 
            placeholder='Apellido' 
            name='apellido' 
            className='shop-item' 
            value={values.apellido}
            onChange={handleOnChange}
            />

            <input 
            type='text' 
            placeholder='Email' 
            name='email' 
            className='shop-item' 
            value={values.email}
            onChange={handleOnChange}
            />

            <input 
            type='text' 
            placeholder='Teléfono' 
            name='telefono' 
            className='shop-item'
            value={values.telefono}
            onChange={handleOnChange}
            />

            <button className='shop-btn'>Enviar</button>
        </form>
        </div>} 
        
    </div>
  )
}

export default Shop