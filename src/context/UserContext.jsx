import { createContext, useState } from "react";

const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [users, setUsers] = useState([]);

    return (
        <UserContext.Provider value = {{userId, setUserId}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext };