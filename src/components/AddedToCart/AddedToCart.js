import { NavLink } from "react-router-dom";

const AddedToCart = ({name, quantity}) => {
    return (
        <div>
            <h3>Agregaste {quantity} {name} al Carrito!!</h3>
            <br />
            <NavLink to={'/'} className='btn btn-outline-secondary'>Seguir Comprando</NavLink>
            <NavLink to={'/cart'} className='btn btn-outline-secondary'>Finalizar Compra</NavLink>
        </div>
    )
}   

export default AddedToCart