"use client"
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    let cartTotal = 0
    cart.forEach((item) => {
        cartTotal += item.price * item.quantity
    })

    return (
        <AuthContext.Provider value={{ cart, setCart, cartTotal }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}