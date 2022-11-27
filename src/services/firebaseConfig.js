// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//metodo para inicializar firebase
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNPXmvcH1hexOoU5XvdljCnqV4tOFUvuM",
  authDomain: "react-js-45060-matias-cortes.firebaseapp.com",
  projectId: "react-js-45060-matias-cortes",
  storageBucket: "react-js-45060-matias-cortes.appspot.com",
  messagingSenderId: "257225904309",
  appId: "1:257225904309:web:86c2d99978493e01846efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//creo una constante database o db a traves de un metodo getFirebase y le paso las configuraciones de mi app y lo exportamos para llamar db en otro archivo
export const db = getFirestore(app);

//esportamos colleectionProd para usarla en ItemListContainer e ItemDetailContainer
//export const collectionProd = collection(db, 'productos');