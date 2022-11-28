
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNPXmvcH1hexOoU5XvdljCnqV4tOFUvuM",
  authDomain: "react-js-45060-matias-cortes.firebaseapp.com",
  projectId: "react-js-45060-matias-cortes",
  storageBucket: "react-js-45060-matias-cortes.appspot.com",
  messagingSenderId: "257225904309",
  appId: "1:257225904309:web:86c2d99978493e01846efc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
