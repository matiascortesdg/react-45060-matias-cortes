//Creamos componente ItemDetail

import ItemCount from "./ItemCount";
import Cart from './Cart';
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ( { item } ) => {
    // para guardar el valor de qty lo almacenos en un setCant
    const [ cant, setCant ] = useState(0)

    const onAdd = (qty) => {
        setCant(qty)

    };
        //Ahora usando ternarios podemos mostrar o no el contador una vez agregador al carrito.
    return ( 
        <div className="item-detail">
            <img className="img-detail" src={item.img} alt={item.title} />
            <div className="detail">
                {
                    cant === 0 ? 
                <>
                <h4 className="descuento">{item.descuento}% descuento</h4>
                <h2 className="h2-title">{item.title}</h2>
                <p>{item.description}</p>
                <h5 className="h5-title"><s>${item.price}</s></h5>
                <h3 className="h3-title">${item.price - (item.price * item.descuento)/100}</h3>
                </> : 
                    <Link to="/cart">
                        <Cart />
                    </Link>
                
                }

                <ItemCount stock={item.stock} onAdd={onAdd}
                />
            </div>
        </div>


    
     );
};

export default ItemDetail;

//podemos usar uplifting para crear una funcion en un archivo y llamarla en otro., por ejemlo entre ItemDetail y ItemCount y evolver el esgtado
//1. creo la function en un archivo
    //const func = (argument) => {}

//2. llamo a la function desde otro archivo
    //func(parametro);