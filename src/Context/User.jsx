import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const [userName, setUserName] = useState(null);
    const [city,setCity] = useState(null);
    const [phone,setPhone]=useState(null);
    const [userToken, setUserToken] = useState(localStorage.getItem('usertoken'));
    const getData = () => {
        if (userToken != null) {
            const decoded = jwtDecode(userToken);
            setUserName(decoded.userName);
            setCity(decoded.city);
            setPhone(decoded.phone);
        }
    }
    useEffect(() => {
        getData();
    }, [userToken])

    return (
        <UserContext.Provider value={{ setUserToken, userName,setUserName,city,setCity,phone,setPhone}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
