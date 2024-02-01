import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, type Auth } from "firebase/auth"

export const useFirebaseAuth = () => {
    const { $auth } = useNuxtApp()

    //just trying to keep typed variables
    const firebaseAuth: Auth = $auth as unknown as Auth 

    const register = async (email:string, password: string) => {
        try {
            const credential = await createUserWithEmailAndPassword(firebaseAuth, email,password)
            const registerUser = credential.user
            return registerUser
        } catch (err) {
            //should use a console provider or/and datadog 
            console.error(err)
        }
    }
    
    const login = async (email:string , password:string) => {
        try {
            const loggetUser = await signInWithEmailAndPassword(firebaseAuth, email, password)
            return loggetUser.user
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async () => {
        try {
            await firebaseAuth.signOut();
            navigateTo("/login")
        } catch (error) {
            console.error(error)
        }
    }

    const currentUserPromise = () => new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            unsubscribe()
            resolve(user);
        },)
    })

    const infoUser = firebaseAuth.currentUser
   

    return {
        currentUserPromise,
        register,
        login,
        logout,
        infoUser,
    }
}