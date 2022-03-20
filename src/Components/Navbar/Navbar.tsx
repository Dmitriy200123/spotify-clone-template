import {Link} from 'react-router-dom';
import './Navbar.css';
import {observer} from "mobx-react-lite";

let Navbar = observer(() => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__link navbar__main-link">
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/>
                </svg>
                <span className="navbar__item-name">Главная</span>
            </Link>

            <Link to="/search" className="navbar__link navbar__search-link">
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/>
                </svg>
                <span className="navbar__item-name">Поиск</span>
            </Link>

            <Link to="/collection/playlists" className="navbar__link navbar__my-library">
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M5.495 4c-1.375 0-1.375-2 0-2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505z"/>
                </svg>
                <span className="navbar__item-name">Моя медиатека</span>
            </Link>
        </div>
    )
});

export default Navbar;