import { useState, createContext } from "react";
import './NotificationService.css'

const Notification = ({ severity, message }) => {

    if (message === '') return             // Esto me devuelve "nada", entonces cuando el mensaje está vacío (que es también el default de useState) no devuelve componente

    return (
        <div className={ severity === 'success' ? 'greenNotification' : 'redNotification'}>
            {message}
        </div>
    )
}


export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [severity, setSeverity] = useState('success')
    const [message, setMessage] = useState('')
    
    const setNotification = (severity, message) => {
        setSeverity(severity)
        setMessage(message)

        setTimeout(() => {
            setMessage('')
        }, 2000);
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>     {/* el value (que es "setNotification") es lo que estoy mandando a todo lo que está dentro del provider */}
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}
