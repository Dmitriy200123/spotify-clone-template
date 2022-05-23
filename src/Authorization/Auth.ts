import {ITokenInfo} from "./ITokenInfo";
import {IRefreshTokenInfo} from "./IRefreshTokenInfo";

const url = 'https://accounts.spotify.com/api/token'
const authSecret = window.btoa(process.env.REACT_APP_CLIENT_ID as string + ':' + process.env.REACT_APP_CLIENT_SECRET as string);

function postAuth<T>(body: BodyInit) {
    return fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${authSecret}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        }
    ).then(r => r.ok ? r.json().then(json => json as T) : Promise.reject(r));
}

export const getAuthorizationToken = (authCode: string): Promise<ITokenInfo> => {
    return postAuth<ITokenInfo>(new URLSearchParams({
        code: authCode,
        redirect_uri: process.env.REACT_APP_REDIRECT_URL as string,
        grant_type: 'authorization_code',
    }));
};

export const refreshAuthorizationToken = (refreshToken: string): Promise<IRefreshTokenInfo> => {
    return postAuth<IRefreshTokenInfo>(new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    }));
};

