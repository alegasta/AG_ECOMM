import React, {useState, useContext} from 'react'
import ItemCart from '../components/ItemCart/ItemCart';


export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    //Función para eliminar todos los productos del carrito
    const clearCart = () => setCart([]);

    //Función para saber si existe un producto en el carrito
    const isInCart=(id)=>{
        return cart.find(product => product.id === id) ? true : false; 
    }

    //Función para eliminar un producto del carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id!==id));

    //Función para agregar al carrito
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart)
    }

    //Función para ver el precio del total de los productos en el carrito
    const totalPrice = () => cart.reduce((acum, product) => acum + product.precio * product.quantity, 0);
  
    //Función para ver cuantos elementos hay en el carrito
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    //Función para renderizar los productos del carrito
    const productosCarrito = () => cart.map((product)=> (
        <ItemCart key={product.id} product={product} />
    ) )

  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        productosCarrito,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider