import {TokenInfo} from "./TokenInfo";

const url = 'https://accounts.spotify.com/api/token'
let authSecret = window.btoa(process.env.REACT_APP_CLIENT_ID as string + ':' + process.env.REACT_APP_CLIENT_SECRET as string);

let getAuthorizationToken = (authCode: string): Promise<TokenInfo> => {
    return fetch(url, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${authSecret}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            code: authCode,
            redirect_uri: process.env.REACT_APP_REDIRECT_URL as string,
            grant_type: 'authorization_code',
        })
    })
        .then(r => r.ok ? r.json().then(json => {
            return json as TokenInfo
        }) : Promise.reject(r));
};

export default getAuthorizationToken;