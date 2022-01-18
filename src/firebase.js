import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {

    apiKey: "AIzaSyAvFSI0kS0QIIpJUp65NoetglGbmqfeKdQ",
  
    authDomain: "noose-rj.firebaseapp.com",
  
    projectId: "noose-rj",
  
    storageBucket: "noose-rj.appspot.com",
  
    messagingSenderId: "821425881339",
  
    appId: "1:821425881339:web:851e5bdc8e1ea73545f05e",
  
    measurementId: "G-FZ0T66TGV9"
  
  };
  
  
 
const app= initializeApp(firebaseConfig)

export const db=getFirestore(app)