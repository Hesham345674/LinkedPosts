import { createContext, useState } from "react";
import { CounterContext } from "./CounterContext";

export const AuthContext = createContext();



export default function AuthContextProvider({ children }) {
    const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem('token') != null)

    return <AuthContext.Provider value={{ isLoggedIn, setisLoggedIn }} >

        {children}
    </AuthContext.Provider>

}