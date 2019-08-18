import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBs6anf10nOWg3MBYzpGT1XTIuD8sbu_WA",
    authDomain: "crwn-project.firebaseapp.com",
    databaseURL: "https://crwn-project.firebaseio.com",
    projectId: "crwn-project",
    storageBucket: "",
    messagingSenderId: "194708064578",
    appId: "1:194708064578:web:fe1a892472c6f335"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



