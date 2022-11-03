//Creamos componente ItemDetailContainer

import React, { useEffect, useState } from 'react'
import { getProduct } from '../mock/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
//estado de objetos
const [ item, setItem ] = useState({});
    
const { idProd } = useParams();

useEffect(() => {
        getProduct(idProd)
            .then((res) => {
                setItem(res)
            })

            .catch((error) => {
                console.log(error)
            })
    }, [idProd]);

    return(
        <div className="item-detail-container">
            
            <ItemDetail item={item}/>
        </div>

    );
};

export default ItemDetailContainer;