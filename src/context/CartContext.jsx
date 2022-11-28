
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ( {children} ) => {

    const [ cart, setCart ] = useState([]);

    const addToCart = (item, count) => {

        if(isInCart(item.id)) {
            sumarCount(item, count)

        } else {
            setCart([...cart, {...item, count  }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    };

    const sumarCount = (itemPorAgregar, count) => {

        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {

                const productoActualizado = {
                    ...prodDelCarrito,
                    count,
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        });
        setCart(cartActualizado)
    };

    const deleteAll = () => {
        setCart([])
    };

    const deleteProd = (id) => { 
        const prodFiltrados = cart.filter((prod) => prod.id !== id )
        setCart(prodFiltrados);
    };

    const totalUnidades = () => {
        let count = 0;
        const copia = [ ...cart ];
        copia.forEach((prod) => {
            count = count += prod.count;
        });
        return count;
    };

    const totalPrecio = () => {
        let count = 0;
        const copia = [ ...cart ];
        copia.forEach((prod) => {
            count = count += prod.count * prod.price;
        });
        return count;
    };

    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.count;
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteAll, deleteProd, totalUnidades, totalPrecio, cantidadDeProducto  }}>
                {children}
        </CartContext.Provider>  
    );
};

export default CartProvider;