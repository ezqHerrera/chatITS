import {useState, createContext} from 'react';

const UsernameContext = createContext();

export default function UsernameContextProvider({children}) {
    const [username, setUsername] = useState([]);

    return (
        <UsernameContext.Provider value = {{username, setUsername}}>
            {children}
        </UsernameContext.Provider>
    )
}