import { useState } from 'react'

const ItemCount = ( { stock, initial, onAdd } ) => {

        const [count, setCount] = useState(1);

        const sumar = () => {
            if (count < stock) {
                setCount(count + 1);
            };
        };

        const restar = () => {
            if (count > 1) 
            setCount(count - 1);
        };

        const reset = () => {
            setCount(initial);
        }

        const agregar = () => onAdd(count)

        return (
            <div className="contador">

                <p className="btn-count">{count}</p>
                <button className="btn-count" onClick={restar}>-</button>
                <button className="btn-count" disable={count === stock} onClick={sumar}>+</button>
                <button className="btn-count" onClick={reset}>Volver al Valor inicial</button>
                <button className="btn-count" onClick={agregar}>Agregar al Carrito</button>

            </div>
        )
};

export default ItemCount;