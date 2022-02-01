import React, { createContext, useState } from "react";
import { IAuthContext } from '../interfaces/interfaces-module';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = (props:React.PropsWithChildren<{ }>) => {
    const [authStatus, setStatus] = useState<boolean>(JSON.parse(localStorage.getItem('status_login') as string));

    if(JSON.parse(localStorage.getItem('status_login') as string) === undefined) {
        setStatus(false);
    }

    return(
        <AuthContext.Provider value={{authStatus, setStatus}}>
            {props.children}
        </AuthContext.Provider>
    )
}