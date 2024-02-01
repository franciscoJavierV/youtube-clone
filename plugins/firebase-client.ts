import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { FirebaseConfig } from "../models/firebase";

export default defineNuxtPlugin((nuxtApp) => {

    const runtimeConfig = useRuntimeConfig();

    const {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        measurementId
    } = runtimeConfig.public

    const firebaseConfig:FirebaseConfig  = {
    apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth()
    
    onAuthStateChanged(auth ,(user)=> {
        if(user){
            const uuid = user.uid;

        }
    })

    return {
        provide: {
            auth,
        }
    }
})