//Creamos el componente Navbar.jsx

//importamos componente Button
import Button from './Button';
import logo from '../img/logo.png';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'

const Navbar = ( { isInHeader } ) => { 
    // <nav className={isInHeader ? 'navbar' : 'footer'}>

    if(isInHeader) {
        return (

            <nav className="navbar">

                <Link to="/" >
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="logo"/>
                        <h1>Zapatillas Running React</h1>
                    </div>
                </Link>
                <ul className="ul">
                    <NavLink to="/category/Running"  className="li">Running</NavLink>
                    <NavLink to="/category/Trail" 
                    className="li">Trail</NavLink>
                    <NavLink to="/category/Trekking"  className="li">Trekking</NavLink>
                    <NavLink to="/nosotros" 
                    className="li">Nosotros</NavLink>
                    <NavLink to="/contacto" 
                    className="li">Contacto</NavLink>
                </ul>
                <div className="icons">
                    <Button text="login"/>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>

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