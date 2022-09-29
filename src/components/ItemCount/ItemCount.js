import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(0)

    if (initial) {
        initial = count
    }

    const increment = () => {
        if (count < stock) {
            setCount(parseInt(count) + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(parseInt(count) - 1)
        }
    }

    return (
        <div id='counter' className="input-group mb-3">
            <h3>Stock: {stock}</h3>
            <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
            <input value={count} onChange={(e) => setCount(e.target.value)} />
            <button className="btn btn-outline-secondary" onClick={increment}>+</button>
            <button className="btn btn-outline-none" onClick={ stock!==0 ? onAdd : null}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount