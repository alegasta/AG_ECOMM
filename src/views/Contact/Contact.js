import React from 'react'
import './contact.css'
import { BsEnvelope } from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
        <h1 className='contacto-titulo'>Formulario de contacto</h1>
        <p className='contacto-parrafo'>Si tienes interés en conseguir precios mayoristas déjanos tus datos para ponernos en contacto</p>
        
        
        <div>
          <div className='container'>
            <form className='contacto-formulario'>
              <input placeholder='Nombre...' className='contacto-elementos'></input>
              <input placeholder='Apellido...' className='contacto-elementos'></input>
              <input placeholder='Número...' className='contacto-elementos'></input>
              <input placeholder='Mail...' className='contacto-elementos'></input>
              
              <button className='contacto-btn'>Enviar</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact