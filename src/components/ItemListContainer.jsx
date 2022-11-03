//Creamos el componente ItemListContainer.jsx
import { useEffect, useState } from 'react'
import { getProducts } from '../mock/products'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';

const ItemListContainer = ( { greeting, intro } ) => {
    
    const [items, setItems] = useState([]);
    // podehacer esto pero con destructuing
        //const valor = useParams();
        //console.log(valor.categoryName)
    const {categoryName} = useParams();

    useEffect(() => {
            getProducts(categoryName)
                .then((res) => {
                    setItems(res)
                })
             
                .catch((error) => {
                    console.log(error)
                })
    }, [categoryName]);

    return (
        
        <div id="item-list-container">
            <h1 className="h1-title">{greeting}</h1>
            <p className="main-text">{intro}</p>
            <ItemList items={items}/>
        </div>

    ); 
};

export default ItemListContainer;