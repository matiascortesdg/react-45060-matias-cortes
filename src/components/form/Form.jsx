//Creamos el componente Form.jsx
//importamos el estadoy el useEffect
import React, { useEffect, useState } from 'react'

const Form = () => {
    //2. creamos un estado x cada tipo de dato (input) que queremos controlar (la que le gusta a React) con un valor inciicial vacio para que no nos de undefined
    // const [ name, setName ] = useState('');
    // const [ lastName, setLastName ] = useState('');
    
    //6.O podemos Crear otro estado llamado data si queremos unificar los datos
    const [ data, setData ] = useState(
            {   nombre: '',
                apellido: ''
            }
    );

    //1.creamos la funcion del evento
    const enviarDatos = (e) => {
        // e.preventDefault() nos sirve para que no se nos refresque la pagina
        e.preventDefault()
        
        // inputs no controlados
        // console.log(e.target); nos indica quien disparó el evento
        // console.dir(e.target);como ssaber las propiedades y metodos de Form
        // console.dir(e.target.elements.nombre.value);como ssaber las propiedades y metodos de Form (no le gusta a React)
        // console.dir(e.target.elements.apellido.value);como ssaber las propiedades y metodos de Form (no le gusta a React)

        // inputs controlados tienen que tener estados
        // console.log(e);
        //cuando le demos enviar deberia recargar la pagina, Y eso no lo queremos

        //5. datos del comprador
        // const obj = {
        //     comprador: {
        //         nombre: name,
        //         apellido: lastName,
        //     }
        // }

    };
        
        //7. Y en vez de tener 2 funciones podemos tener 1 sola
        const handleChange = (e) => {
            //seteaamos el estado con value para obtener el valor usando un spread operator usando e.target.name diferencio los campos
            //lo hacemos dinamico entre [] con una func
            const { name, value } = e.target;
            setData({...data, [name]: value });
        };

        console.log(data);
    
        //3. Tenemos que tener en cada input una funcion onChange y la funcion
        //const handleName = (e) => {
            //guardamos con el set, arranca vacio
            //setName(e.target.value);
            //  }

            //const handleLastName = (e) => {
            //si yo quiero saber que tipo disparo ese evento usamos target y lo guardo en un estado
            //setLastName(e.target.value);
            // }
        
            //4. Y por cada input le vamos a dat un value para lo que valga el estado

            //8. Si yo quisiera saber los eventListener desde window.addEventListener

            // const handleMove = (e) => {
            //     console.log(e)
            // }
            
            // //registra todo moviento del cursor. Ahora usando un useEffect podemos remover los eventos y ejecutamos codigo para limpiar o cleanup function. Puede serviros por ejemplo si queremos abortar llamado a una API
            // //setInterval
            // useEffect(() => {

            //     window.addEventListener('mousemove', handleMove)
            //     return () => {
            //         window.removeEventListener('mousemove', handleMove)
            //     }
            // })

    return (
        <div className="form-container">
            <form action="" onSubmit={enviarDatos}>

                <input
                 type="text"
                 placeholder="Nombre"
                 name="nombre"
                 onChange={handleChange}
                 value={data.nombre} />

                <input
                type="text"
                placeholder="Apellido"
                name="apellido"
                onChange={handleChange}
                value={data.apellido}
                />

                <button>Enviar</button>
            </form>
        </div>
    )

};

// con 1 estado por input:

// return (
//     <div className="form-container">
//         <form action="" onSubmit={enviarDatos}>

//             <input
//              type="text"
//              placeholder="Nombre"
//              name="nombre"
//              onChange={handleName}
//              value={name} />

//             <input
//             type="text"
//             placeholder="Apellido"
//             name="apellido"
//             onChange={handleLastName}/>
//             value={lastName}

//             <button>Enviar</button>
//         </form>
//     </div>
// )

// };

export default Form;