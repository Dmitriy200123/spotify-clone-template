import {useSearchParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import getAuthorizationToken from "../../Authorization/Auth";
import {observer} from "mobx-react-lite";

const LoginCallback = observer(() => {
    const [, setToken] = useState('');
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code') as string;
    const navigate = useNavigate()

    useEffect(() => {

        let mounted = true;
        getAuthorizationToken(code).then(token => {
            if (mounted) {
                setToken(token.access_token)
                localStorage.setItem('access_token', token.access_token);
                localStorage.setItem('refresh_token', token.refresh_token);
                navigate('/');
            }
        })

        return () => {
            mounted = false;
        }
    }, [code, navigate]);

    return (<></>);
});

export default LoginCallback;