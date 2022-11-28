import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import BeatLoader from "react-spinners/BeatLoader";
import ItemList from './ItemList';

const ItemListContainer = ( { greeting, intro } ) => {
    
    const [items, setItems] = useState([]);

    const [ loading, setLoading ] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos')

        const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;

        getDocs(ref)
            .then((res) => {

                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data()
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

            return () => setLoading(true);

    }, [categoryName]);

    if (loading) {
        return (
            <div className="item-list-container">
                <h1>Cargando</h1> <BeatLoader color="#36d7b7" margin={15} size={20} />
            </div>
        );
    };


    return (
        
        <div className="item-list-container">
            <h1 className="h1-title">{greeting}</h1>
            <p className="main-text">{intro}</p>
            <ItemList items={items}/>
        </div>

    ); 
};

export default ItemListContainer;