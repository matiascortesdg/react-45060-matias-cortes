//Escribir nuestro app

import './App.css';
//importo componente Header
import Header from './components/Header';

//importo componente ItemListContainer
import ItemListContainer from './components/ItemListContainer';

//importo componente Main
import Main from './components/Main';

//importo componente ItemCount
//import ItemCount from './components/ItemCount'

import ItemDetailContainer from './components/ItemDetailContainer';

//importo componente Cart
import Cart from './components/Cart';

//importo componente Nosotros
import Nosotros from './components/Nosotros';

//importo componente Contacto
import Contacto from './components/Contacto';

//importo componente Form
import Form from './components/form/Form';

//import componente provider CartProvider 
import CartProvider from './context/CartContext';

//importo componente Footer
import Footer from './components/Footer';

//importo la libreria react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  
  return (
        <BrowserRouter>
                <CartProvider>
                        <Header/>
                        <Routes>        
                                <Route path="/"
                                        element={
                                        <ItemListContainer
                                                greeting="Bienvenidos a la tienda de Zapatillas Running React"

                                                intro="Running React es una tienda online de zaptaillas de running, trail y trekkking donde vas a poder encontrar las mejores marcas y modelos para la disciplina que más se ajuste a tu cuerpo"
                                        />
                                        }
                                />

                                <Route  path="/category/:categoryName"
                                        element={<ItemListContainer />}
                                />
                                        
                                <Route path="/detail/:idProd"
                                        element={<ItemDetailContainer />}
                                />
                                
                                <Route path="/cart"
                                        element={<Cart />}
                                />

                                <Route path="/contacto"
                                        element={<Contacto />}
                                />

                                <Route path="/nosotros"
                                        element={<Nosotros />}
                                />

                                <Route path="/checkout"
                                        element={<Form />}
                                />

                        </Routes>
                        <Footer />
                </CartProvider>    
        </BrowserRouter>
  );
};

export default App;
