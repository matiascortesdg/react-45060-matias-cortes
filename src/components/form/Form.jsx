import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const Form = () => {

    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ emailUno, setEmailUno ] = useState('');
    const [ emailDos, setEmailDos ] = useState('');

    const [ orderId, setOrderId ] = useState('');

    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio(); 
    
    const enviarDatos = (e) => {

        e.preventDefault();
        
        const ObjOrden = {
            buyer: {
                name,
                lastName,
                direccion,
                telefono,
                emailUno
            },
            items: cart,
            total: totalCarrito,
            date: serverTimestamp(),
        };

        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, ObjOrden)
            .then((res) =>{
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) =>{
                console.log('Hubo un error', error)
            })
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
            
    const handleDireccion = (e) => {
        setDireccion(e.target.value);
    };

    const handleTelefono = (e) => {
        setTelefono(e.target.value);
    };

    const handleEmailUno = (e) => {
        setEmailUno(e.target.value);
    };

    const handleEmailDos = (e) => {
        setEmailDos(e.target.value);
    };    

if(orderId) {
    return (
         <h1>Gracias por tu compra! Tu numero de seguimiento es: {orderId} Vuelve al  
         <Link to="/">Home</Link></h1>
    );
};

    return (
        <div className="form-container">
            <form action="" onSubmit={enviarDatos}>

                <input className='btn-input'
                 type="text"
                 placeholder="Nombre"
                 name="nombre"
                 onChange={handleName}
                 value={name} />

                <input className='btn-input'
                type="text"
                placeholder="Apellido"
                name="apellido"
                onChange={handleLastName}
                value={lastName}
                />

                <input className='btn-input'
                type="text"
                placeholder="Direccion"
                name="direccion"
                onChange={handleDireccion}
                value={direccion}
                />

                <input className='btn-input'
                type="text"
                placeholder="Telefono"
                name="telefono"
                onChange={handleTelefono}
                value={telefono}
                />

                <input className='btn-input'
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleEmailUno}
                value={emailUno}
                />

                <input className='btn-input'
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleEmailDos}
                value={emailDos}
                />  

                <button disabled={emailUno !== emailDos}>Enviar</button>

                <Link to='/cart' className='btn-input'>Volver al carrito</Link>
            </form>
        </div>
    );

};

export default Form;