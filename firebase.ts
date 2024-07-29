import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDOZCkV8XcO3DKKHYT_Di7SYtD22GErI78",
    authDomain: "saas-chat-pdf.firebaseapp.com",
    projectId: "saas-chat-pdf",
    storageBucket: "saas-chat-pdf.appspot.com",
    messagingSenderId: "1071936426616",
    appId: "1:1071936426616:web:95cea3184365767896d38d"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const storage = getStorage(app);

export {db, storage};