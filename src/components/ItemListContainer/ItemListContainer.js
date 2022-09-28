import React from 'react'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = () => {
  return (
    <>
      <h2 className='mt-3 titulo-productos'>Nuestros productos</h2>
      <div className='container'>
          <ItemList />
    </div>
    </>

  )
}

export default ItemListContainer