import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {

    const { addItem, isInCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification('success', `Agregaste ${quantity} ${name}`)
    }

    return (
        <div className="CardItem container text-center">
            <div className="row row-cols-2">
                <div className='col align-self-start'>
                    <header className="Header">
                        <h1 className="ItemHeader">
                            {name}
                        </h1>
                    </header>
                    <picture>
                        <img src={img} alt={name} className="ItemImg" />
                    </picture>
                </div>
                <div className="col align-self-center">
                    <p className="Info">
                        <strong>Categoría:</strong> {category}
                    </p>
                    <p className="Info">
                        <strong>Descripción:</strong> {description}
                    </p>
                    <p className="Info">
                        <strong>Precio:</strong> $ {price}
                    </p>
                    <div>
                        {
                            !isInCart(id)
                                ? <ItemCount onAdd={handleOnAdd} stock={stock} /> 
                                : <Link to='/cart' className="btn btn-outline-secondary btn-sm">Finalizar Compra</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail