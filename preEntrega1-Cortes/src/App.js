//Escribir nuestro app

import './App.css';
//importo componente Header
import Header from './components/Header';

//importo componente ItemListContainer
import ItemListContainer from './components/ItemListContainer';

//importo componente Main
import Main from './components/Main';

//importo componente Layout
import Layout from './components/Layout';

//importo componente Footer
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header/>


      <ItemListContainer
          greeting="Bienvenidos a la tienda de Zapatillas Running React"
      />

      <Main
          intro="Running React es una tienda online de zaptaillas de running, trail y trekkking donde vas a poder encontrar las mejores marcas y modelos para la disciplina que más se ajuste a tu cuerpo"
      />
            
      <Layout>
      </Layout>

      <Footer />
   
    </>
  );
};

export default App;
