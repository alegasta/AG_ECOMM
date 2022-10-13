import React from 'react'
import './contact.css'
import { BsEnvelope } from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
        <h1 className='contacto-titulo'>Contacto</h1>
        <p className='contacto-parrafo'>Lorem</p>
        <ul className='container contacto-lista'>
          <li className='contacto-elemento-lista'>Lorem</li>
          <li className='contacto-elemento-lista'>Lorem</li>
          <li className='contacto-elemento-lista'>lorem</li>
        </ul>
        <p>Lorem</p>
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