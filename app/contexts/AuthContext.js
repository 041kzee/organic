"use client"
import { createContext, useContext, useState, useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
        <AuthContext.Provider value={{cart, setCart}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}