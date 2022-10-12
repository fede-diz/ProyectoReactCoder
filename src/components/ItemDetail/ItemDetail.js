import { useState } from "react"
import AddedToCart from "../AddedToCart/AddedToCart"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
    const [toCart, setToCart] = useState(true)

    const [productAdded, setProductAdded] = useState({})

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
        setProductAdded(productToAdd)
        setToCart(false)
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
                    {toCart === true ? <ItemCount onAdd={handleOnAdd} stock={stock} /> : <AddedToCart {...productAdded}/>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail