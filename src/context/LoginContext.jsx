// Contexto del estado de la sesión
import {useState, createContext} from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    const login = (data) => {
        setIsLoggedIn(true);
        setUserId(data.userId);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserId(null);
    };

    const contextValue = {
        isLoggedIn,
        userId,
        login,
        logout
    };

    return (
        <LoginContext.Provider value = {contextValue}>
            {children}
        </LoginContext.Provider>
    );
};