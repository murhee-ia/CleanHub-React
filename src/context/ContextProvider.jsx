import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setCurrentUser: () => {},
    setToken: () => {},
    userInfo: null,
    setUserInfo: () => {},
});

export const ContextProvider = ({children}) => {
    
    const [currentUser, setCurrentUser] = useState(
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
        setCurrentUser(user)
        if (user) {
            localStorage.setItem("current_user", JSON.stringify(user))
        } else {
            localStorage.removeItem("current_user");
        }
    }

    const [userInfo, setUserInfo] = useState({});


    return (
        <StateContext.Provider value={{
            currentUser,
            saveUser,
            token,
            saveToken,
            userInfo,
            setUserInfo,
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);