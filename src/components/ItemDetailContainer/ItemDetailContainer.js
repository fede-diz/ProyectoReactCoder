import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = `Detalle de ${product.name}`
    }, [product])

    useEffect(() =>{
        setLoading(true)

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then((response) => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
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