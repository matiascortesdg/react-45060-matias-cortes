//Creamos el componente ItemListContainer.jsx
import { useEffect, useState } from 'react'
//import { getProducts } from '../mock/products'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import BeatLoader from "react-spinners/BeatLoader";
import ItemList from './ItemList';

const ItemListContainer = ( { greeting, intro } ) => {
    
    const [items, setItems] = useState([]);

    //Pasar un estado de cargando
    const [ loading, setLoading ] = useState(true);


    // podehacer esto pero con destructuing 
        //const valor = useParams();
        //console.log(valor.categoryName)
    const { categoryName } = useParams();

    useEffect(() => {
        //creamos una constante con metodos que nos da Firestore Collection. Le pasamos la base de datos db y que vaya a buscar la coleccion 'productos'
        const collectionProd = collection(db, 'productos')
        //query otro metodo de firestore para buscar referencia, recibe el collectionProd y a donde va a ir a buscarlo
        //const q = query(collectionProd, where('category', '==', categoryName));

        //Podemos hacer ternario creamos una ref si categoryName existe ? bueno envio algo sino : mando otra cosa. Este ref puede vale 2 cosas, productos filtrados o todo
        const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;

        //creamos un if else con la condicion si NO !existe categoryName que nos traiga todos los productos
        //if (!categoryName) {
        
        //getDocs otro metodo de firebase para traer todos nuestros documentos y nos retorna una promesa y le pasamos la constante
        getDocs(ref)
            .then((res) => {
                //console.log(res.docs)
                //para guardar la promesa vamos a crear un array de products con un map[] y transformar estos datos de firebase con el metodo data de firestore
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

            //podemos tambien agregar un return para que smuestre cada vez que cambiemos, por ejemplo de categorias

            return () => setLoading(true);

    }, [categoryName]);


    //podemos hacer un loading con ternarios para mostrar u ocultar algo con un if antes de early return(condiconal)
    
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