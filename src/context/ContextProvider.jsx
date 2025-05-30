import {createContext, useContext, useState, useEffect} from "react";
import axiosClient from "../axios-client";

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
    const [token, setToken] = useState(localStorage.getItem("auth_token"));

    const saveToken = (token) => {
        setToken(token);
        localStorage.setItem("auth_token", token);
    };

    const saveUser = (user) => {
        setUser(user)
        localStorage.setItem("current_user", JSON.stringify(user))
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