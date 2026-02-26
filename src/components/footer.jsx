import logoIcon from '../icons/logo100.svg'
import vkIcon from '../icons/vk.svg'
import telegramIcon from '../icons/telegram.svg'
import phoneIcon from '../icons/phone.svg'
import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__infoBlock">
                <div className="footer__logo">
                    <img src={logoIcon} className="logoImage" alt='logo' />
                    <div className="footer__contacts">
                        <span className="footer__contacts__header">Связаться с нами:</span>
                        <span className="footer__contacts__links">
                            <a href="#!"><img src={vkIcon} alt="vk_link"/></a>
                            <a href="#!"><img src={telegramIcon} alt="vk_link"/></a>
                            <a href="#!"><img src={phoneIcon} alt="vk_link"/></a>
                        </span>
                        <span className="footer__contacts__phone">+7-314-159-27-28</span>
                    </div>
                </div>
                <div className="footer__adress">
                    <span className="footer__adress__header">Наш адрес:</span>
                    <span className="footer__adress__text">г.Пущино, ул.Ленина, д.3</span>
                </div>
                <span className="footer__credits__normal">© 2026 <span className="accentText">Пущино туры</span> все права защищены</span>
            </div>
            <div className="footer__linksBlock">
                <div className="footer__screensLinks">
                    <ul>
                        <li>
                            <a href="#!">наши туры</a>
                        </li>
                        <li>
                            <a href="#!">интересные места</a>
                        </li>
                        <li>
                            <a href="#!">как доехать</a>
                        </li>
                        <li>
                            <a href="#!">записаться</a>
                        </li>
                        <li>
                            <a href="#!">о нас</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__docsLinks">
                    <ul>
                        <li>
                            <a href="#!">согласие на обработку персональных данных</a>
                        </li>
                        <li>
                            <a href="#!">политика обработки персональных данных</a>
                        </li>
                        <li>
                            <a href="#!">политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="#!">пользовательское соглашение</a>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="footer__credits__mobile">© 2026 <span className="accentText">Пущино туры</span> все права защищены</span>
        </footer>
    );
}

export default Footer;