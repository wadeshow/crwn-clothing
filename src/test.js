import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('smZdn5WvLqwY8PlmzFNQ').collection('cartItems').doc('PBxpJfWkrZqwQRGjrpZx');
firestore.doc('/users/smZdn5WvLqwY8PlmzFNQ/cartItems/PBxpJfWkrZqwQRGjrpZx');
firestore.collection('users/smZdn5WvLqwY8PlmzFNQ/cartItems');