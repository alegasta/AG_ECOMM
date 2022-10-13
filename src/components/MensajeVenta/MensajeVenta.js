import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './mensajeVenta.css'

const MensajeVenta = ({mensaje}) => {
    
    Swal.fire ({
        title: 'Compra exitosa!',
        text: `El id de tu compra es: ${mensaje} `,
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })
      return (
    <div className='contenedor-btn-volver-home'>
      <Link to='/' className='text-decoration-none'>
        <button className='volver-home-btn'>Volver a la página inicial!</button>
      </Link>
    </div>
  )
}

export default MensajeVenta