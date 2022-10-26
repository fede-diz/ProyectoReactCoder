import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { NotificationContext } from '../../notification/NotificationService'
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    //Estados que gestionen los inputs (1 estado por cada input) -> ver cuando se hizo la búsuqeda de ML

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { cart, total, deleteCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: "Nico",
                    phone: "1123",
                    mail: "assd@mail",
                    address: "asdsd"
                },
                items: cart,
                total:total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const idsCart = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', idsCart)))

            const { docs } = productsFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity

                if(stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                deleteCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                setNotification("success", `El ID de su orden es: ${orderAdded.id}`)
            } else {
               setNotification("error", "Hay algunos de los productos elegidos que están sin stock")
            }
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <div>
                <h3>Estamos procesando su pedido ...   </h3>
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <h2> Formulario</h2>
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )
}

export default Checkout