import logoIcon from '../icons/logo100.svg'
import '../styles/header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logoIcon} alt='logo' />
            </div>
            <div className="header__menu">
                <ul>
                    <li>
                        <a href="#!">наши туры</a>
                    </li>
                    <li>
                        <a href="#!">интересные места</a>
                    </li>
                    <li>
                        <a href="#!">записаться</a>
                    </li>
                    <li>
                        <a href="#!">как доехать</a>
                    </li>
                    <li>
                        <a href="#!">о нас</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;