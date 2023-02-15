import React, { useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../auth/firebase-config'
import { InputProviderProps } from '../types/globaltypes.types'


export type InitialStateType = {
    currentUser: any
}

const initialState = {
    currentUser: null
}

const UserContext = React.createContext<InitialStateType>(initialState);

export const UserProvider = ({ children }: InputProviderProps) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
        });
    }, [])
    //console.log(currentUser, "cntext")
    return (
        <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>
    )
}
// make sure use
export const useUserContext = () => {
    return useContext(UserContext)
}
