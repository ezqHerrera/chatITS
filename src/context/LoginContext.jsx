// Contexto del estado de la sesión
import {useState, createContext} from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value = {{isLoggedIn, setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    );
};