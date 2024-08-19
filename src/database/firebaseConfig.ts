import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDO9ropVPAWssq2T1w4b9dGsgJQmeymNPg",
  authDomain: "catalog-tesis.firebaseapp.com",
  projectId: "catalog-tesis",
  storageBucket: "catalog-tesis.appspot.com",
  messagingSenderId: "816768093938",
  appId: "1:816768093938:web:ea1f35c77410b0f900ca6b",
  measurementId: "G-YH599FSFGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };