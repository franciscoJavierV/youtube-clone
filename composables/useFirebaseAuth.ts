import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export const useFirebaseAuth = () => {
    const {$auth} = useNuxtApp()

    const register = async (email:string, password: string) => {
        try {
            const credential = await createUserWithEmailAndPassword($auth, email,password)
            const registerUser = credential.user
            return registerUser
        } catch (err) {
            //should use a console provider or/and datadog 
            console.error(err)
        }
    }
    
    const login = async (email:string , password:string) => {
        try {
            const loggetUser = await signInWithEmailAndPassword($auth, email, password)
            return loggetUser.user
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async (email:string , password:string) => {
        try {
            await $auth.signOut();
        } catch (error) {
            console.error(error)
        }
    }


    return {
        register,
        login
    }
}