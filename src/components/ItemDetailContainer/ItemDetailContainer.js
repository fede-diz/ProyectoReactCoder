import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = ({greeting}) => {     // este greeting lo tiene que heredar desde APP.js 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProductsById().then((response) => {
            setProducts(response);
        }).finally(() => {
            setLoading(false)
        });
    }, [])

    if(loading) {
        return (
            <div>
                <h1>{greeting}</h1>
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemDetail products={products} />
        </div>
    )
}

export default ItemDetailContainer