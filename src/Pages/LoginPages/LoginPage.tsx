import loginUrl from '../../Authorization/LoginUrl';
import SpotifyLogo from './spotify-logo.svg';
import './LoginPage.css';
import {observer} from "mobx-react-lite";

let LoginPage = observer(() => {
    return (
        <div className="loginPage">
            <img className="loginPage__spotifyLogo" src={SpotifyLogo} alt="login-page__spotify-logo"/>
            <h1 className='loginPage__title'>Услышать весь мир!</h1>
            <a className='loginPage__loginLink' href={loginUrl}>Войти</a>
        </div>
    )
});

export default LoginPage;