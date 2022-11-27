# Bienvenidos a tienda online de 'Zapatillas Running React'


*Zapatillas Running React* es un e-commerce de una gran de variedad de marcas y modelos de zapatillas que se adaptan mejor para hacer running urbano, de trail y de trekking.

![](./public/logo.png)

Es un proyecto para el curso de _React JS_ de _CODERHOUSE_.

Para ver el proyecto: bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades del proyecto`


Se pueden navegar por las 3 categorías de productos Running, Trail y Trekking para filtrar resultados de los producto. Una vez a´hi se puede ver el detalle de cada producto y elegir la cantidad a comprar. También se puede navegar por el carrito de compras y ver que productos tengo agregados o no y la cantidad. Y para temrinar se puede hacer u checkout de la comprar con una validación antes de enviar.

## Librerías utilizadas


Algunas de las librerias utilizadas:

(https://reactrouter.com/)
    
- BrowserRouter

    _almacena la ubicación actual en la barra de direcciones del navegador usando direcciones URL._

- Routes
  
  _es el componente que que va a envolver a toda nuestra aplicacion y va a dar todas las funcionalidades que voy a poder usar con la libreria. Y así le provee a los otros componentes todas esas funcionalidades._

- Route

    _es el componente que va a envolver cada ruta  y dentro lleva 2 paramtros:
    un path='/' y un element={}_

- Link 

    _donde antes utilizamos la etiqueta < a > la vamos reemplazar por la Link to="" y el href por el to=""_
    
- NavLink

    _para agregarle la funcion de .active cuando se esté en esa ruta._

* React Spinners BeatLoader
    _para darle feedbackal usuario de que el componente se está cargando y el usuario sepa que la acción que realizó está en curso._

* Firabase

    _Para el manejo de la base de datos, se usó Firebase._


## Tipografías
Se incorporaron tipografías de Google Fonts:
* [Roboto Sans]('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

## Hooks
* useState();
permite añadir el estado de e que hacer algo después de renderizarse.

* useEffect();
el componente tiene que hacer algo después de renderizarse.

* useContext();
permite comunicar componentes funcionales a través del contexto. En este caso el productos en el carrito.

* useParams();
simplificar la creación, redirección y anidación de rutas para crear una navegación dinámica
*



## Como instalar y usar el repositorio del proyecto

```bash
# Clonar este repositorio

$ git clone https://github.com/matiascortesdg/react-js-45060-matias-cortes.git

# Instalar las dependencias
$ npm install

# Correr la app
$ npm start
```
## Preview


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

