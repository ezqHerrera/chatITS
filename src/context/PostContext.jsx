import { createContext, useState } from "react";

const PostContext = createContext();

export default function PostContextProvider({children}) {
    const [posts, setPosts] = useState([]);

    return (
        <PostContext.Provider value = {{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export { PostContext };