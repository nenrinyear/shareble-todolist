// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? '',
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ?? '',
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ?? '',
    appId: process.env.NEXT_PUBLIC_APP_ID ?? '',
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID ?? ''
};

export const initializeFirebaseApp = () =>
    !getApps().length ? initializeApp(firebaseConfig) : getApp();