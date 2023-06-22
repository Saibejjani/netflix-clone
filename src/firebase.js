import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAMwuJniGy1wZu_s2nPNOVBPxFwZ1wMNrg',
  authDomain: 'netflix-clone-bc056.firebaseapp.com',
  projectId: 'netflix-clone-bc056',
  storageBucket: 'netflix-clone-bc056.appspot.com',
  messagingSenderId: '643135046099',
  appId: '1:643135046099:web:a24dd02d7e056d31ba2f26',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
