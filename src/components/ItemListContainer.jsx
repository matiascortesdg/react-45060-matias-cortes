//Creamos el componente ItemListContainer.jsx
import { useEffect, useState } from 'react'
import { getProducts } from '../mock/products'
import { useParams } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
import ItemList from './ItemList';

const ItemListContainer = ( { greeting, intro } ) => {
    
    const [items, setItems] = useState([]);

    //Pasar un estado de cargando
    const [ loading, setLoading ] = useState(true);


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
                //finally se va a ejecutar siempre si cae en then o catch
                .finally(() =>  {
                    setLoading(false)
                });

                //podemos tambien agregar un return para que smuestre cada vez que cambiemos, por ejemplo de categorias

                return () => setLoading(true);

    }, [categoryName]);


    //podemos hacer un loading con ternarios para mostrar u ocultar algo con un if antes de early return(condiconal)
    
    if (loading) {
        return (
            <div className="item-list-container">
                <b>Cargando</b> <BeatLoader color="#36d7b7" margin={15} size={20} />
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