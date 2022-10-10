import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';      // useParams se usa para obtener parámetros de react-router-dom

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()           // Esto lo hereda de APP.js  línea 19 -  con el    ":productId"    el : es necesario y "productId" lo defino yo

    useEffect(() =>{
        getProductsById(productId).then((response) => {
            setProduct(response);
        }).finally(() => {
            setLoading(false)
        });
    }, [])

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