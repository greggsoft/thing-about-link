import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBOCNtWoCqVeyXHlfWR9yYCREW0_-j57Ao",
    authDomain: "thing-about-link.firebaseapp.com",
    projectId: "thing-about-link",
    storageBucket: "thing-about-link.appspot.com",
    messagingSenderId: "131050257923",
    appId: "1:131050257923:web:36edba2739fdfa90add836",
    measurementId: "G-5JLRF789Y0"
}

export const app = initializeApp(firebaseConfig)
