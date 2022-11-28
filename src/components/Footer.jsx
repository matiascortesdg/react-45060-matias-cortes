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