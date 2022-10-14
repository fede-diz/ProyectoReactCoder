import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    
    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
        console.log(cart) 
    }, [cart])
    
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])    
        } else {
            console.log('Este item ya está en el carrito')
        }
    }
  
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter((prod) => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const deleteCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach((prod) => accu += prod.quantity)
        return accu
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}