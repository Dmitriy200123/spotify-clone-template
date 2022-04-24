import {Navigate} from "react-router-dom";
import * as React from "react";
import {ReactElement} from "react";
import {observer} from "mobx-react-lite";

export const AuthCheck: React.FC<{ children: ReactElement }> = observer(({children}) => {
    const token = localStorage.getItem('access_token');

    // todo check token in api
    if (!token) {
        return <Navigate to="/login"/>;
    }
    return children;
});