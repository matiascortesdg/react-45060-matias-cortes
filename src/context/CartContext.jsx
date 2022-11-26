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
            sumarCount(item, count)

        } else {
            setCart([...cart, {...item, count  }]);
        }
    };

    //creamos una funcion de un some del array cart recorriendo si está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    };


    //creamos una funcion para sumar cantidades de UN PRODUCTO
    const sumarCount = (itemPorAgregar, count) => {
        //creamos cartACtualizado y recorremos el cart que algun producto sea igual a itemAgregar
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                //creo un objeto con propiedades
                const productoActualizado = {
                    ...prodDelCarrito,
                    //cantidad: prodDelCarrito.count + count,
                    count,
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        });
        setCart(cartActualizado)
    };

    ////creamos una funcion para sumar cantidades de UN PRODUCTO pero TERNARIO
    // const sumarCountTernario = (itemPorAgregar, count) => {
    //     //creamos cartACtualizado y recorremos el cart que algun producto sea igual a itemAgregar
    //     const cartActualizado2 = cart.map((prodDelCarrito) => 
    //         itemPorAgregar.id === prodDelCarrito.id
    //         ? {
    //             ...prodDelCarrito,
    //                 cantidad: prodDelCarrito.count + count,
    //                 //count,
    //         } : prodDelCarrito
    //     );
    //         setCart(cartActualizado2)
    // };


    //Ahora creamos una funcion para vaciar el carrito y setearlo como un array vacio y la pasamos por el value
    const deleteAll = () => {
        setCart([])
    };

    //Ahora creamos una funcion para eliminar un SOLO producto que recibe el id
    const deleteProd = (id) => {
        //esto va a traer un array del objeto [{}] menos !=== del que tenga el id 
        const prodFiltrados = cart.filter((prod) => prod.id !== id )
        setCart(prodFiltrados);
    };

    
    //Funcion para sumar UNIDADES TOTALES del carrito (CartWidget)
    const totalUnidades = () => {
        let count = 0;
        const copia = [ ...cart ];
        copia.forEach((prod) => {
            count = count += prod.count;
        });
        return count;
    };

    //Una funciona para sumar TOTAL del carrito
    const totalPrecio = () => {
        let count = 0;
        const copia = [ ...cart ];
        copia.forEach((prod) => {
            count = count += prod.count * prod.price;
        });
        return count;
    };

    //Una funcion de cantidad de Producto utilizando un find y obtener un objeto{} y retornar solo count
    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.count;
    };

    //y que retorne el Provider y a este lo llamamos desde App
     
    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteAll, deleteProd, totalUnidades, totalPrecio, cantidadDeProducto  }}>
                {children}
        </CartContext.Provider>  
    );
};

export default CartProvider;