// services/firebase.ts
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyAXzseur66XA3pQemRzPcXJCgjCpnwur0M",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "food4u-422b0",
  storageBucket: "food4u-422b0.firebasestorage.app",
  messagingSenderId: "524506771648",
  appId: "1:524506771648:android:a243aa40c57bfbef83bd25",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firestore instance
export const db = firebase.firestore();
export const auth = firebase.auth();

// Fetch food locations from Firestore
export const fetchFoodLocations = async () => {
  try {
    const snapshot = await db.collection('foodLocations').get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching food locations:', error);
    return [];
  }
};