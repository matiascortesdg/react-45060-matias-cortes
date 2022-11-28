
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, deleteAll, deleteProd, totalPrecio } = useContext(CartContext);

    if (cart.length === 0)
        return (
            <div className="cart">
            <h1> Aún no agregaste productos en el carrito. Vuelve al  
                <Link to="/">Home</Link>
            </h1>
            </div>
        );

    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <div className="cart" key={prod.id}>
                    <img className="cart-img" src={prod.img} alt={prod.title} />
                    <div>
                        <p>Cantidad: {prod.count}</p>
                        <h4>Producto: {prod.title}</h4>
                        <h4>Precio: ${prod.price}</h4>
                        <button onClick={() => deleteProd(prod.id)}>Eliminar</button>
                    </div>
                </div>
            ))};
            <h2>Total: ${totalPrecio()}</h2>
            <button onClick={deleteAll}>Vaciar Carrito</button>
            <Link to='/checkout' className='btn-input'>Checkout</Link>
        </div>
    );
};

export default Cart;