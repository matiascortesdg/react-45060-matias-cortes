//Creo el componente Header.jsx arrow function y exportamos para importarlo desde nuestro App.js

//importo el componente Navbar
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
          <Navbar isInHeader={true} />
        </header>
    );
};
export default Header;
