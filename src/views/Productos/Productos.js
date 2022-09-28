import React from 'react'
import CartWidget from '../../components/CartWidget/CartWidget'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const Productos = () => {
  return (
    <div>
        <ItemListContainer />
        <CartWidget />
    </div>
  )
}

export default Productos