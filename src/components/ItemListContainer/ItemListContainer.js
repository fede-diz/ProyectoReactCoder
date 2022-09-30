import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProducts().then((response) => {
            setProducts(response);
        }).finally(() => {
            setLoading(false)
        });
    }, [])

    if(loading) {
        return (
            <h1>Loading...</h1>                 // Poner un loader redondito, queda más fachero (armarlo como componente en otra carpeta del explorerJS)
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>Listado de Productos</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer