import Cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <a href="#top" className="link-secondary">
                <img src={Cart} className='carrito-logo' alt='carrito' />
                5
            </a>
        </div>
    )
}

export default CartWidget