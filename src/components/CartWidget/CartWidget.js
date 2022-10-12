import Cart from './assets/cart.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div>
            <Link to={'/cart'} className="link-secondary">
                <img src={Cart} className='carrito-logo' alt='carrito' />
                5
            </Link>
        </div>
    )
}

export default CartWidget