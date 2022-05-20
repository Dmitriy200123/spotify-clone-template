import {Navigate} from "react-router-dom";
import * as React from "react";
import {ReactElement} from "react";
import {useAuth} from "../../Hooks/useAuth";
import {LoadingAnimation} from "../LoadingAnimation/LoadingAnimation";

export const AuthCheck: React.FC<{ children: ReactElement }> = ({children}) => {
    const authInfo = useAuth();
    if (authInfo.isLoading)
        return <LoadingAnimation/>

    return authInfo.isAuthorized ? children : <Navigate to="/login"/>;
};