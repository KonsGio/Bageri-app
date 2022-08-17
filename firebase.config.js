import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCDADphHbWB6KNPzdFsk5pY5V5oDIrGRb4",
    authDomain: "bageri-b9cb3.firebaseapp.com",
    databaseURL: "https://bageri-b9cb3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bageri-b9cb3",
    storageBucket: "bageri-b9cb3.appspot.com",
    messagingSenderId: "1075574334758",
    appId: "1:1075574334758:web:bc4de202cf7de1cfe24de7",
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};

