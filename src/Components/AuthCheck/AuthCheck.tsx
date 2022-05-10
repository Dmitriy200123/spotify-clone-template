import {Navigate} from "react-router-dom";
import * as React from "react";
import {ReactElement} from "react";

export const AuthCheck: React.FC<{ children: ReactElement }> = ({children}) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        return <Navigate to="/login"/>;
    }

    return children;
};