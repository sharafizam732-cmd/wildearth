import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

export const firebaseConfig = {
  "projectId": "wildlifeconservationchannel",
  "appId": "1:741498710280:web:406f24aa4a75ec6a3ea4bd",
  "apiKey": "AIzaSyC5J5kf5y3YlKbQOuo2nCkydyB1SxjK46M",
  "authDomain": "wildlifeconservationchannel.firebaseapp.com",
  "firestoreDatabaseId": "(default)",
  "storageBucket": "wildlifeconservationchannel.firebasestorage.app",
  "messagingSenderId": "741498710280",
  "measurementId": "G-J11V4RL450"
}


export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = firebaseConfig.firestoreDatabaseId
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Analytics only works in supported browser environments
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app);
  });
}

export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
};
export type { FirebaseUser };