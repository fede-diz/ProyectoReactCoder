import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-SKXQ9jlK7yV8V2fDaS-cHfivl6TRXZ4",
  authDomain: "proyectocoderreact.firebaseapp.com",
  projectId: "proyectocoderreact",
  storageBucket: "proyectocoderreact.appspot.com",
  messagingSenderId: "771948927538",
  appId: "1:771948927538:web:c5d33479634f65c777fa2b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)