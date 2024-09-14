'use client';


import { lookInSession } from "@/app/lib/session";
import { createContext, useContext, useEffect, useState } from "react"



const UserContext = createContext({

})


export const AppWrapper = ({children} : {children:React.ReactNode}) => {
    const [userAuth, setUserAuth] = useState('')
    useEffect(() => {
        let userInSession = lookInSession("user");
        userInSession ?  setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token:null})
    },[])
    return (
        <UserContext.Provider value={{userAuth, setUserAuth}}>
            {children}
        </UserContext.Provider>
    )
}


export function useUserContext () {
    return useContext(UserContext)
}