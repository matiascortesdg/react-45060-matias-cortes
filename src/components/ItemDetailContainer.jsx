
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'

const ItemDetailContainer = () => {

const [ item, setItem ] = useState({});

const [ loading, setLoading ] = useState(true);

const { idProd } = useParams();

useEffect(() => {

    const collectionProd = collection(db, 'productos');
    const ref = doc(collectionProd, idProd);

    getDoc(ref)

    .then((res) => {
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