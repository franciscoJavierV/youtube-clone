import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, type Auth } from "firebase/auth"

export const useFirebaseAuth = () => {
    const { $auth } = useNuxtApp()

    //just trying to keep typed variables
    const firebaseAuth: Auth = $auth as unknown as Auth 

    const register = async (email:string, password: string) => {
        const toast = useToast()
        try {
            const credential = await createUserWithEmailAndPassword(firebaseAuth, email,password)
            const registerUser = credential.user
            toast.add({
                title:  'register.successMessage',
                timeout: 2000,
                callback: async () => {
                    await navigateTo('login')
                }
            })
            return registerUser
        } catch (err) {
            toast.add({
                title: 'register.error',
                timeout: 2000,
             
            })
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

    //-- handling 
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