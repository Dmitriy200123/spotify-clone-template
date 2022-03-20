import loginUrl from '../../Authorization/LoginUrl';
import SpotifyLogo from './spotify-logo.svg';
import './LoginPage.css';
import {observer} from "mobx-react-lite";

let LoginPage = observer(() => {
    return (
        <div className="login-page">
            <img className="login-page__spotify-logo" src={SpotifyLogo} alt="login-page__spotify-logo"/>
            <h1 className='login-page__title'>Услышать весь мир!</h1>
            <a className='login-page__login-link' href={loginUrl}>Войти</a>
        </div>
    )
});

export default LoginPage;