"use client"
import { redirect } from "next/navigation"
import { useSession } from "../utility/use-session"

export function AuthenticatedPages({children}) {
    console.log('Authentication')
const {session, user, loading} = useSession()
console.log(session, "sess")
// if (!session ){
//    redirect("/")
//    return 
// }
    // use redirect if session doesnt exist
    // create custom hook of useSession
    // const {user} = useUser()
// task - own language kaise authentication route work krra hai 

    return (
        <>
        {children}
        </>
    )
}