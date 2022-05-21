import {loginUrl} from '../../Authorization/LoginUrl';
import SpotifyLogo from './spotify-logo.svg';
import './LoginPage.css';

export const LoginPage = () => {
    return (
        <div className="loginPage">
            <img className="loginPage__spotifyLogo" src={SpotifyLogo} alt="login-page__spotify-logo"/>
            <h1 className='loginPage__title'>Услышать весь мир!</h1>
            <a className='loginPage__loginLink' href={loginUrl}>Войти</a>
        </div>
    )
};