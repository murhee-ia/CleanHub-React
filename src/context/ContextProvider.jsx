import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    tokenExpiration: null,
    setUser: () => {},
    setToken: () => {},
    setTokenExpiration: () => {},
});

export const ContextProvider = ({children}) => {
    
    const [currentUser, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [tokenExpiration, _setTokenExpiration] = useState(localStorage.getItem('TOKEN_EXPIRATION'));

    
    const setToken = (token, expiration) => {
        _setToken(token)
        _setTokenExpiration(expiration);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
            if (expiration) {
                localStorage.setItem('TOKEN_EXPIRATION', expiration);
            } else {
                localStorage.removeItem('TOKEN_EXPIRATION');
            }
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
            localStorage.removeItem('TOKEN_EXPIRATION');
        }
    }

    return (
        <StateContext.Provider value={{
            currentUser,
            setUser,
            token,
            setToken,
        }}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);