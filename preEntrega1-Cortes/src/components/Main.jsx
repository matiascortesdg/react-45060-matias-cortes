//importamos componente Button
import Button from './Button';


//Creamos nuestro componente Main.jsx
const Main = ( { intro  } ) => {
//const Main = ( props ) => {
//console.log(props); props ->{}
//const saludo = props.saludo;
//Destructuring -> const { saludo } = props;
    

    return (
        <main className="main">
          <p className="main-text">{intro}</p>
          <Button text="Ver Más>>" />
        </main>
    )
}
export default Main;