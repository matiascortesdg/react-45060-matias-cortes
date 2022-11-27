//Creamos componente ItemDetailContainer

import React, { useEffect, useState } from 'react'
//import { getProduct } from '../mock/products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'

const ItemDetailContainer = () => {
//estado de objetos
const [ item, setItem ] = useState({});
//Pasar un estado de cargando
const [ loading, setLoading ] = useState(true);

const { idProd } = useParams();

useEffect(() => {
    //creamos una constate collectionProd
    //const collectionProd
    const collectionProd = collection(db, 'productos');
    const ref = doc(collectionProd, idProd);

    getDoc(ref)

    .then((res) => {
        //console.log(res)
        setItem({
            id: res.id,
            ...res.data(),
        });
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
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