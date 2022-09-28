import React, {useState} from 'react'
import './itemCount.css'

const ItemCount = ({onAdd, stock, initial}) => {
    
    let [contador, setContador] = useState(1)
    
    const disminuir = () => {
        setContador(--contador)
    }
    const aumentar = () => {
        setContador(++contador)
    }

    return (
        <>
            <div className='contador-flex'>
                <button disabled={contador <= 1} className='contador-btn' onClick={disminuir}>-</button>
                <h4>{contador}</h4>
                <button disabled={contador >= stock} className='contador-btn' onClick={aumentar}>+</button>
            </div>   
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(contador)} className='contador-btn-agregar'>Agregar al carrito</button>
            </div>
        </>     
        
    )
}
export default ItemCount