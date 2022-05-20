export class TokensStorage {
    private static readonly accessTokenKey: string = 'access_token';
    private static readonly refreshTokenKey: string = 'refresh_token';

    static get accessToken() {
        return localStorage.getItem(this.accessTokenKey);
    }

    static setAccessToken(accessToken: string) {
        localStorage.setItem(this.accessTokenKey, accessToken);
    }

    static removeAccessToken() {
        localStorage.removeItem(this.accessTokenKey);
    }

    static get refreshToken() {
        return localStorage.getItem(this.refreshTokenKey);
    }

    static setRefreshToken(refreshToken: string) {
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    }

    static removeRefreshToken() {
        localStorage.removeItem(this.refreshTokenKey);
    }
}