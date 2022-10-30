import Spinner from "../Spinner/Spinner";
import Form from "../Form/Form";
import { useNotification } from '../../notification/NotificationService';
import { useNavigate } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getOrder } from "../../services/firebase/firestore/order";


const Checkout = () => {
    const createOrder = (objOrder) => getOrder(objOrder)

    const { data: order, error, loading } = useAsync(createOrder)
    
    const navigate = useNavigate()

    const { setNotification } = useNotification()

    if (order) {
        setTimeout(() => {
            navigate('/')
        }, 2000)

        setNotification("success", `El ID de su orden es: ${order.id}`)
    } else {
        setNotification("error", "Hay algunos de los productos elegidos que están sin stock")
    }

    if(loading) {
        return (
            <div>
                <h3>Estamos procesando su pedido ...   </h3>
                <Spinner />
            </div>
        )
    } else {
        document.title = 'Checkout'
    }

    if (error) {
        return setNotification('error', 'Hubo un error, por favor refrescá la página')
    }

    return (
        <div>
            <Form onFill={createOrder}/>
        </div>
    )
}

export default Checkout