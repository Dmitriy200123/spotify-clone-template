import {useNavigate} from "react-router-dom";
import './LogoutButton.css';
import {observer} from "mobx-react-lite";
import {TokensStorage} from "../../../TokensStorage/TokensStorage";

export const LogoutButton = observer(() => {
    const navigate = useNavigate();

    function logout() {
        TokensStorage.removeAccessToken();
        TokensStorage.removeRefreshToken();
        navigate('/login', {replace: true});
    }

    return <button className='logoutButton' onClick={logout}><label
        className='logoutButton__name'>Выйти</label></button>;
});