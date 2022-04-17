import {useNavigate} from "react-router-dom";
import './LogoutButton.css';
import {observer} from "mobx-react-lite";

const LogoutButton = observer(() => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('access_token');
        navigate('/login', {replace: true});
    }

    return <button className='logoutButton' onClick={logout}><label
        className='logoutButton__name'>Выйти</label></button>;
});

export default LogoutButton;