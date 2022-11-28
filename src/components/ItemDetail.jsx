
import ItemCount from "./ItemCount";
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';


const ItemDetail = ( { item } ) => {

    const [ show, setShow ] = useState(true);

    const { addToCart, cantidadDeProducto } = useContext(CartContext);

    const onAdd = (qty) => {
        setShow(false);
        addToCart(item, qty);

    };

    const cantidad = cantidadDeProducto(item.id);

    return ( 
        <div className="item-detail">
            <img className="img-detail" src={item.img} alt={item.title} />
            <div className="detail">
                <h4 className="descuento">{item.descuento}% descuento</h4>
                <h2 className="h2-title">{item.title}</h2>
                <p>{item.description}</p>
                <h5 className="h5-title"><s>${item.price}</s></h5>
                <h3 className="h3-title">${item.price - (item.price * item.descuento)/100}</h3>
                
                { show  ?   ( <ItemCount stock={item.stock} onAdd={onAdd} initial={cantidad} />
                  ) : ( <Link to="/cart">Ir al Carrito                       
                        </Link>
                  )};
                
            </div>
        </div>    
     );
};

export default ItemDetail;
