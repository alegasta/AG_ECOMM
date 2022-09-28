import React from 'react'
import './home.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className='bg-color'>
      <div>
        <h1>SANMAR</h1>
      </div>
      <div className='pb-4 contenedor-carrusel'>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img src="../../../assets/img-home/portada-1.jpeg" alt='portada1' className='img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src='../../../assets/img-home/portada-2.jpeg' alt='portada2' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src='../../../assets/img-home/portada-3.jpeg' alt='portada3' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src='../../../assets/img-home/portada-4.jpeg' alt='portada4' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src='../../../assets/img-home/portada-5.jpeg' alt='portada5' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src='../../../assets/img-home/portada-6.jpeg' alt='portada6' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src="../../../assets/img-home/portada-7.jpeg" alt='portada7' className='img-fluid img-carousel' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src='../../../assets/img-home/portada-8.jpeg' alt='portada8' className='img-fluid img-carousel' />
        </Carousel.Item>
      </Carousel>
      </div>
      
      <div className='container d-flex flex-column justify-content-center'>
        <p className='parrafo-home my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo ut lectus interdum rhoncus. Morbi gravida mi quis facilisis maximus. Nam et commodo diam, et lacinia felis. Vivamus gravida porttitor eros, in condimentum ante mollis id. Mauris porttitor a.</p>
      </div>
    </div>
  )
}

export default Home