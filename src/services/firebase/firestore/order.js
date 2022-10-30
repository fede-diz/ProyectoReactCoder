import { db } from "..";
import { useCart } from "../../../context/CartContext";
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";

export const getOrder = (objOrder) => {
    const { cart, deleteCart } = useCart()

    return new Promise((resolve) => {
        const batch = writeBatch(db)

        const outOfStock = []

        const idsCart = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsFirestore = getDocs(query(productsRef, where(documentId(), 'in', idsCart)))

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
            batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = addDoc(orderRef, objOrder)

            deleteCart()
            resolve(orderAdded)
        }
    })
}