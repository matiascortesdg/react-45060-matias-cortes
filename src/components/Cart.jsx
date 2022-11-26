//Creamos componente Cart.jsx
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { products } from "../mock/products";

const Cart = () => {
    //1. Para pasar los productos creamos hook useContext
    const { cart, deleteAll, deleteProd, totalPrecio } = useContext(CartContext);

    //traemos los productos llamando al ESTADO cart del CartContext
    //Sabiendo que cart es un array[] lo vamos aplicar un metodo map para que por cada producto dentro de un div nos traiga del producto la: title, precio, img.
    //Y traemos la funcion de deleteAll

    //con un if postramos mensajes si no hay nada en el carrito
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
        </div>
    );
};

export default Cart;