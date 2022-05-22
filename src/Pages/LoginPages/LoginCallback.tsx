import {useSearchParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuthorizationToken} from "../../Authorization/Auth";
import {observer} from "mobx-react-lite";
import {LoadingAnimation} from "../../Components/LoadingAnimation/LoadingAnimation";
import {TokensStorage} from "../../TokensStorage/TokensStorage";
import {MessageStore} from "../../Stores/MessageStore";

export const LoginCallback = observer(() => {
    const [, setToken] = useState('');
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code') as string;
    const navigate = useNavigate()

    useEffect(() => {
        let mounted = true;
        getAuthorizationToken(code)
            .then(token => {
                if (mounted) {
                    setToken(token.access_token)
                    TokensStorage.setAccessToken(token.access_token);
                    TokensStorage.setRefreshToken(token.refresh_token);
                    navigate('/', {replace: true});
                }
            })
            .catch(() => MessageStore.instance.addErrorMessage('Не удалось авторизоваться'));

        return () => {
            mounted = false;
        }
    }, [code, navigate]);

    return <LoadingAnimation/>
});