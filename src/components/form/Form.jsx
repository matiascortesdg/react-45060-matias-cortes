//Creamos el componente Form.jsx
//importamos el estadoy el useEffect
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';


const Form = () => {
    //2. creamos un estado x cada tipo de dato (input) que queremos controlar (la que le gusta a React) con un valor inciicial vacio para que no nos de undefined
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ direccion, setDireccion ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ emailUno, setEmailUno ] = useState('');
    const [ emailDos, setEmailDos ] = useState('');

    //estado id
    const [ orderId, setOrderId ] = useState('');

    //me traiga cdel cartContext el estado cart
    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio(); 
    
    //1.creamos la funcion del evento
    const enviarDatos = (e) => {
        // e.preventDefault() nos sirve para que no se nos refresque la pagina
        e.preventDefault();
        //nuestra orden de compra
        //console.log({ name , lastName, direccion, telefono, emailUno, emailDos });

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
        //metodo a utilizar addDoc nos devuelve
        addDoc(orderCollection, ObjOrden)
            .then((res) =>{
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) =>{
                console.log('Hubo un error', error)
            })
            // .finally(() =>{

            // })
    
    };

    
    //3. Tenemos que tener en cada input una funcion onChange y la funcion
    const handleName = (e) => {
        //guardamos con el set, arranca vacio
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        //si yo quiero saber que tipo disparo ese evento usamos target y lo guardo en un estado
        setLastName(e.target.value);
    };
            
    const handleDireccion = (e) => {
        //si yo quiero saber que tipo disparo ese evento usamos target y lo guardo en un estado
        setDireccion(e.target.value);
    };

    const handleTelefono = (e) => {
        //si yo quiero saber que tipo disparo ese evento usamos target y lo guardo en un estado
        setTelefono(e.target.value);
    };

    const handleEmailUno = (e) => {
        //si yo quiero saber que tipo disparo ese evento usamos target y lo guardo en un estado
        setEmailUno(e.target.value);
    };

    const handleEmailDos = (e) => {
        //si yo quiero saber que tipo disparo ese evento usamos target y lo guardo en un estado
        setEmailDos(e.target.value);
    };    

//early return con if
if(orderId) {
    return (
         <h1>Gracias por tu compra! Tu numero de seguimiento es: {orderId}</h1>
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