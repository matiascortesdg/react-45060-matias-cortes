//Creamos nuestro componente Footer
//Antes de la version 17 tenia que estar import React from 'react';

//Si quiero reutilizar un componente, ejemplo Navbar puedo hacerlo
import Navbar from './Navbar';

const Footer = () => {

    return (
        <footer>

            <Navbar isInHeader={false} />
            <p className='text-footer'>Diseño por Matias Cortes para Curso de React Js en Coderhouse</p>

        </footer>
    );

};

export default Footer;