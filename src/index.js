//Inincializar todo y renderizar

//importando librerias de React 
import React from 'react';
//Renderizar en pantalla que se encarga que pueda renderizar en el DOM todolos componentes
import ReactDOM from 'react-dom/client';

//importando CSS styles misma ruta
//import './index.css';

//importando App.js
import App from './App';

//SEO
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//llama constante y renderizar en App y punto de entrada
root.render(<App />);
