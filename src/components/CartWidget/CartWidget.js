import Cart from './assets/cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div className='CartWidget'>
            <Link to={'/cart'} className="link-secondary">
                <img src={Cart} className='carritoLogo' alt='carrito' />
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget