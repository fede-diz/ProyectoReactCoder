import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() =>{
        setLoading(true)
        getProductsById(productId).then((response) => {
            setProduct(response);
        }).finally(() => {
            setLoading(false)
        });
    }, [productId])

    if(loading) {
        return (
            <div>
                <Spinner />
            </div>
        )
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer