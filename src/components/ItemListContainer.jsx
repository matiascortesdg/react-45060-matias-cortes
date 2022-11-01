//Creamos el componente ItemListContainer.jsx
import { useEffect, useState } from 'react';
import { getProducts } from '../mock/products';
import ItemList from './ItemList';

const ItemListContainer = ( { greeting } ) => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
            getProducts()
                .then((res) => {
                    setItems(res)
                })
             
                .catch((error) => {
                    console.log(error)
                })
    }, []);

    return (
        
        <div id="item-list-container">
            <h1 className="h1-title">{greeting}</h1>
            <ItemList items={items}/>
        </div>

    ); 
};

export default ItemListContainer;