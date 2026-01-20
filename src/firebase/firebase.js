import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.apiKey,
    authDomain: import.meta.env.authDomain,
    projectId: import.meta.env.projectId,
    storageBucket: "rocketleague-b4f3b.firebasestorage.app",
    messagingSenderId: "991203471884",
    appId: "1:991203471884:web:ca4e57ddaf8792e007f429"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
