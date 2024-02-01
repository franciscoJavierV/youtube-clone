export default defineNuxtRouteMiddleware(async(to, from) => {
    //this auth middleware only runs on client site
    if(process.server) return;

    const { currentUserPromise } = useFirebaseAuth();

    const user  = await currentUserPromise()
    //ensure user is logged in 
    if(!user && to.path !== "/login"){
        return navigateTo("/login")
    }
})