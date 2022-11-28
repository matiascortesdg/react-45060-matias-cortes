
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Form from './components/form/Form';
import CartProvider from './context/CartContext';
import Footer from './components/Footer';
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
