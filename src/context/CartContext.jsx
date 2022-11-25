//creamos nuestro componente de contexto
import { useState, createContext } from 'react';


// y este lo vamos a importar
export const CartContext = createContext();

//Creamos un componente llamdo Provider para posarle estados y pasarle valores por el value con una props.children para evitar pegar los componentes de app acá

const CartProvider = ( {children} ) => {
    //creamos el estado vacío
    const [ cart, setCart ] = useState([]);

    //Como hacer una funcion que no cambie el estado? 
    //const copiaCart = [ ...cart];

    //funcion dsde el contexto para manipular el carrito de compra
    const addToCart = (item, count) => {
        //hacemos un spread de item encerrado en objeto
        //console.log({...item, count});
        //No podemos hacer un setCart porque va a sobreescribir por lo que necesitamos u nuevo spread ara que se quede con o que tenia y agregue lo nuevo dentro e un array de objetos

        //Y vamos a utilizar un si ya está en el carrito sumo la cantidad y sino lo agego
        if(isInCart(item.id)) {
            //suma cantidad co una funcion que no cambie el estado
            //alert('Ya agregaste al carrito')

        } else {
            setCart([...cart, {...item, count  }]);
        }
    };

    //creamos una funcion de un some del array cart recorriendo si está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    };

    //Ahora creamos una funcion para vaciar el carrito y setearlo como un array vacio y la pasamos por el value
    const deleteAll = () => {
        setCart([])
    }

    //Unafuncion para eliminar un SOLO producto

    //Una funciona para sumar TOTAL del carrito

    //Funcion para sumar UNIDADES TOTALES del carrito (CartWidget)

    //y que retorne el Provider y a este lo llamamos desde App
    
    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteAll }}>
                {children}
        </CartContext.Provider>  
    );
};

export default CartProvider;