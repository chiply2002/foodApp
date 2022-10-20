import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCknwAVHAIQZsQWvf6WUUYA9gHnoC-u7MY",
    authDomain: "sample-app-358ad.firebaseapp.com",
    projectId: "sample-app-358ad",
    storageBucket: "sample-app-358ad.appspot.com",
    messagingSenderId: "217918443298",
    appId: "1:217918443298:web:8a97ba4cce07275e6a9f7b",
    measurementId: "G-DM94L0PTQ2"
}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);