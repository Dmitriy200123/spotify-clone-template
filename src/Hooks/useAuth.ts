import {useEffect, useState} from "react";
import {UsersTransport} from "../Services/UsersTransport";
import {refreshAuthorizationToken} from "../Authorization/Auth";
import {TokensStorage} from "../TokensStorage/TokensStorage";

interface IAuthInfo {
    isLoading: boolean,
    isAuthorized: boolean
}

export const useAuth: () => IAuthInfo = () => {
    const [isLoading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = TokensStorage.accessToken;
        if (!token) {
            setIsAuthorized(false);
        }

        UsersTransport.getCurrentUser()
            .then(() => {
                setIsAuthorized(true);
            })
            .catch(async () => {
                if (!TokensStorage.refreshToken) {
                    setIsAuthorized(false);
                    return;
                }

                try {
                    const tokenInfo = await refreshAuthorizationToken(TokensStorage.refreshToken as string);
                    TokensStorage.setAccessToken(tokenInfo.access_token);
                    setIsAuthorized(true);
                } catch {
                    setIsAuthorized(false);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return {
        isLoading: isLoading,
        isAuthorized: isAuthorized
    }
};