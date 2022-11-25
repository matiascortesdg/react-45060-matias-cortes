//Creamos componente ItemDetailContainer

import React, { useEffect, useState } from 'react'
import { getProduct } from '../mock/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
//estado de objetos
const [ item, setItem ] = useState({});
//Pasar un estado de cargando
const [ loading, setLoading ] = useState(true);

const { idProd } = useParams();

useEffect(() => {
        //apenas carge el use cambia a true
        //setLoading(true)
        getProduct(idProd)
            .then((res) => {
                setItem(res)
            })

            .catch((error) => {
                console.log(error)
            })
            //finally se va a ejecutar siempre si cae en then o catch
            .finally(() =>  {
                setLoading(false);
            });

    }, [idProd]);

    //podemos hacer un loading con ternarios para mostrar u ocultar algo con un if antes de early return(condiconal)
    
    if (loading) {
        return (
            <div className="item-detail-container">
                <h1>Cargando...</h1>
            </div>
        );
    };

    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>

    );
};

export default ItemDetailContainer;