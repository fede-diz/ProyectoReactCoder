import { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';
import { NotificationContext } from "../../notification/NotificationService";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [greeting, setGreeting] = useState('LISTA COMPLETA DE PRODUCTOS')
    const { setNotification } = useContext(NotificationContext)

    const { typeName } = useParams()

    
    useEffect(() => {
        document.title = typeName ? `Catálogo de ${typeName}` : 'Listado de Productos'
    }, [typeName])

    useEffect(() =>{
        
        setLoading(true)
        typeName ? setGreeting(`CATÁLOGO DE ${typeName.toUpperCase()}`) : setGreeting('LISTA COMPLETA DE PRODUCTOS')

        const collectionRef = typeName 
            ? query(collection(db, 'products'), where('type', '==', typeName))
            : collection(db, 'products')
        
        getDocs(collectionRef).then((response) => {
            const productsAdapted = response.docs.map((doc) => {
                const data = doc.data()
                
                return { id: doc.id, ...data }
           })
           setProducts(productsAdapted)
        }).catch(() => {
            setNotification('error', 'Hubo un error, refrescá la página')
        }).finally(() => {
            setLoading(false)
        });
    }, [typeName]) // eslint-disable-line

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