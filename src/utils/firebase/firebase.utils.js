import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc, // uma instância do documento do banco
  getDoc, // método para pegar dados do banco
  setDoc, // método para setar dados no banco
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfdOQQRwHbQKyfRG50GvCthtX3K_WZ-0k",
  authDomain: "crwn-clothing-db-6bfdf.firebaseapp.com",
  projectId: "crwn-clothing-db-6bfdf",
  storageBucket: "crwn-clothing-db-6bfdf.appspot.com",
  messagingSenderId: "587876779821",
  appId: "1:587876779821:web:c561fcd2e4d15101c7b5a4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
