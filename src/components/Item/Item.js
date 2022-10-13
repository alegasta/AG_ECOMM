import Card from 'react-bootstrap/Card';
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {  
  return (
    <Card className='card-producto' style={{ width: '18rem', borderRadius: '.7rem', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <h4>{product.producto}</h4>
        <Card.Text>
          MARCA: {product.marca} <br />
          MODELO: {product.modelo} <br />
          PRECIO: ${product.precio}.-
        </Card.Text>
        <Link to={`/detail/${product.id}`}>
          <div className='item-btn'>Ver más información</div>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item