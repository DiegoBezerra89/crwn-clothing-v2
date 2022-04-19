import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
	createUserWithEmailAndPassword,
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

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
	console.log("userAuth", userAuth);

	if(!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}
	return userDocRef;

};


export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
	if(!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
}