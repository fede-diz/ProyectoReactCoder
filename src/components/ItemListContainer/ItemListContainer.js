import { useState, useEffect } from "react";
import { getProducts, getProductsByType } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { typeName } = useParams()

    useEffect(() =>{

        const asyncFunction = typeName ? getProductsByType : getProducts

        asyncFunction(typeName).then((response) => {
            setProducts(response);
        }).finally(() => {
            setLoading(false)
        });
    }, [typeName])

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
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer