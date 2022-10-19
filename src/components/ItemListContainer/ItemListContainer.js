import { useState, useEffect, useContext } from "react";
import { getProducts, getProductsByType } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';
import { NotificationContext } from "../../notification/NotificationService";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [greeting, setGreeting] = useState('LISTA COMPLETA DE PRODUCTOS')
    const { setNotification } = useContext(NotificationContext)

    const { typeName } = useParams()

    useEffect(() =>{
        setLoading(true)
        const asyncFunction = typeName ? getProductsByType : getProducts
        typeName ? setGreeting(`CATÁLOGO DE ${typeName.toUpperCase()}`) : setGreeting('LISTA COMPLETA DE PRODUCTOS')
        
        asyncFunction(typeName).then((response) => {
            setProducts(response);
        }).catch(() => {
            setNotification('error', 'Hubo un error, refrescá la página')
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