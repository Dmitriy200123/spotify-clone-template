import {useNavigate} from "react-router-dom";
import './LogoutButton.css';
import {observer} from "mobx-react-lite";

const LogoutButton = observer(() => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('access_token');
        navigate('/login');
    }

    return <button className='logout-button' onClick={logout}><label
        className='logout-button__name'>Выйти</label></button>;
});

export default LogoutButton;