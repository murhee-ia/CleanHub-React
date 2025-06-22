import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({children}) => {
    
    const [currentUser, setUser] = useState(
        JSON.parse(localStorage.getItem("current_user"))
    );
    const [token, setToken] = useState(
        localStorage.getItem("auth_token")
    );

    const saveToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem("auth_token", token);
        } else {
            localStorage.removeItem("auth_token");
        }
    };

    const saveUser = (user) => {
        setUser(user)
        if (user) {
            localStorage.setItem("current_user", JSON.stringify(user))
        } else {
            localStorage.removeItem("current_user");
        }
    }

    return (
        <StateContext.Provider value={{
            currentUser,
            saveUser,
            token,
            saveToken,
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);