import React, {useState} from 'react'
import './shop.css'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig'
import MensajeVenta from '../../components/MensajeVenta/MensajeVenta'

const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
}

const Shop = () => {
    const [values, setValues] = useState(initialState)
    const [ventasID, setVentaId] = useState('');



    console.log(values)

    const  handleOnChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'ventas'), {
            values, 
        });
        console.log('Document written with ID: ', docRef.id);
        setVentaId(docRef.id);
        
}

return (
    <div className='shop-background'> 
        {ventasID ? <MensajeVenta mensaje={ventasID} />  : 
        <>
            <div>
                <h3 className='shop-titulo'>Ya casi tenes tus productos!!</h3>
                <p className='shop-subtitulo'>Completá el formulario para terminar la compra.</p>
            </div>
            <form className='shop-contenedor-formulario' onSubmit={onSubmit}>
                <input 
                    type='text' 
                    placeholder='Nombre' 
                    className='shop-item'
                    name='nombre'
                    value={values.nombre}
                    onChange={handleOnChange}
                    />
                <input 
                    type='text' 
                    placeholder='Apellido' 
                    className='shop-item' 
                    name='apellido'
                    value={values.apellido}
                    onChange={handleOnChange}
                    />
                <input
                    type='email' 
                    placeholder='Email' 
                    className='shop-item'
                    name='email'
                    value={values.email}
                    onChange={handleOnChange}
                    />
                <input 
                    type='number' 
                    placeholder='Teléfono' 
                    className='shop-item' 
                    name='telefono'
                    value={values.telefono}
                    onChange={handleOnChange}
                    />
                <button className='shop-btn'>Enviar</button>
            </form>
        </>
}    
    </div>
  )
}

export default Shop