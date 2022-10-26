import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const { cart, total, deleteCart } = useContext(CartContext)

    return (
        <div>
            {
                cart.map((prod) => (
                    <CartItem key={prod.id} {...prod}/>
                ))
            }

            <div className='info'>
                Precio Total: $ {total}
            </div>

            <button onClick={() => deleteCart()}>Vaciar el carrito</button>
            <Link to='/checkout' id='check' className='btn btn-outline-secondary btn-sm'>Checkout</Link>
        </div>       
    )   
}

export default Cart