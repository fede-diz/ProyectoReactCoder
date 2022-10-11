import { useState, useEffect } from "react";
import { getProducts, getProductsByType } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [greeting, setGreeting] = useState('LISTA COMPLETA DE PRODUCTOS')

    const { typeName } = useParams()

    useEffect(() =>{
        setLoading(true)
        const asyncFunction = typeName ? getProductsByType : getProducts
        typeName ? setGreeting(`CATÁLOGO DE ${typeName.toUpperCase()}`) : setGreeting('LISTA COMPLETA DE PRODUCTOS')
        
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