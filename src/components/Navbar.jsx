//Creamos el componente Navbar.jsx

//importamos componente Button
import Button from './Button';
import logo from '../img/logo192.png';
import CartWidget from './CartWidget';

const Navbar = ( {isInHeader} ) => { 

    if(isInHeader) {

        return (

            <nav className="navbar">
                <img src={logo} alt="logo" />  
                <h1>Zapatillas Running React</h1>
                <ul className="ul">
                    <li className="li">Running</li>
                    <li className="li">Trail</li>
                    <li className="li">Trekking</li>
                    <li className="li">Nosotros</li>
                    <li className="li">Contacto</li>
                </ul>
                <div className="icons">
                    <Button text="login"/>
                    <CartWidget />
                </div>
                
            </nav>
        );

    } else {
        
        return (
            <nav className="footer">
                <h2>Comision 45060</h2>    
                <ul className="ul">
                    <li className="li">Instagram</li>
                    <li className="li">Twitter</li>

                </ul>
                <Button text="Logout"/>
            </nav>
        );
    };        
};

export default Navbar;