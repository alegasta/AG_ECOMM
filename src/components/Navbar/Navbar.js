import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, NavbarBrand } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Navbar } from 'react-bootstrap'
import './navbar.css'
import { Link } from 'react-router-dom'

const BarraNavegacion = () => {
    return (
    <div className='bg-color-navbar'>
        <Navbar expand='md'>
            <div className='container'>
                <NavbarBrand>
                    <Link to='/'>
                        <img src='./assets/logo/SANMARLOGO.png' alt='logo de la marca' className='logo-navbar' />
                    </Link>
                </NavbarBrand>
                <NavbarToggle className='toggle-color' />
                <NavbarCollapse>
                    <Nav  className='ms-auto'>
                        <Nav.Item>
                        <Link to='/' className='link-navbar'>Inicio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/productos' className='link-navbar'>Tienda</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/about' className='link-navbar'>Sobre nosotros</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to='/contact' className='link-navbar'>Contacto</Link>
                        </Nav.Item>
                    </Nav>
                </NavbarCollapse>
            </div>
        </Navbar>
    </div>
    )
}

export default BarraNavegacion