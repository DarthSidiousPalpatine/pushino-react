import logoIcon from '../icons/logo100.svg'
import vkIcon from '../icons/vk.svg'
import telegramIcon from '../icons/telegram.svg'
import phoneIcon from '../icons/phone.svg'
import '../styles/footer.css';
import { useState } from 'react';
import { Modal } from '@mui/material';

import data from '../data/documents.json';

function Footer() {
    const [modalWindow, setModalWindow] = useState({
    doc1: false,
    doc2: false,
    doc3: false,
    doc4: false
    });

    const openModal = (e) => {
        setModalWindow(prev => ({
            ...prev,
            [e.target.name]: true
        }));
    }

    const handleCloseModal = (e) => {
        setModalWindow({ doc1: false, doc2: false, doc3: false, doc4: false });
    };

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
                            <a href="#Tours">наши туры</a>
                        </li>
                        <li>
                            <a href="#POI">интересные места</a>
                        </li>
                        <li>
                            <a href="#RoadToUs">как доехать</a>
                        </li>
                        <li>
                            <a href="#Registration">записаться</a>
                        </li>
                        <li>
                            <a href="#AboutUs">о нас</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__docsLinks">
                    <ul>
                        <li>
                            <a href="#!" name={"doc1"} onClick={openModal}>согласие на обработку персональных данных</a>
                        </li>
                        <li>
                            <a href="#!" name={"doc2"} onClick={openModal}>политика обработки персональных данных</a>
                        </li>
                        <li>
                            <a href="#!" name={"doc3"} onClick={openModal}>политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="#!" name={"doc4"} onClick={openModal}>пользовательское соглашение</a>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="footer__credits__mobile">© 2026 <span className="accentText">Пущино туры</span> все права защищены</span>
            <Modal open={modalWindow["doc1"]} onClose={handleCloseModal}>
                <div className="Footer__modal" onClick={handleCloseModal}>
                    <h1>{data[0][0]}</h1><br/>{data[0].slice(1, data[0].length).map((line, index) =>
                        <p key={index}>{line}</p>
                    )}
                </div>
            </Modal>
            <Modal open={modalWindow["doc2"]} onClose={handleCloseModal}>
                <div className="Footer__modal" onClick={handleCloseModal}>
                    <h1>{data[1][0]}</h1><br/>{data[1].slice(1, data[1].length).map((line, index) =>
                        <p key={index}>{line}</p>
                    )}
                </div>
            </Modal>
            <Modal open={modalWindow["doc3"]} onClose={handleCloseModal}>
                <div className="Footer__modal" onClick={handleCloseModal}>
                    <h1>{data[2][0]}</h1><br/>{data[2].slice(1, data[2].length).map((line, index) =>
                        <p key={index}>{line}</p>
                    )}
                </div>
            </Modal>
            <Modal open={modalWindow["doc4"]} onClose={handleCloseModal}>
                <div className="Footer__modal" onClick={handleCloseModal}>
                    <h1>{data[3][0]}</h1><br/>{data[3].slice(1, data[3].length).map((line, index) =>
                        <p key={index}>{line}</p>
                    )}
                </div>
            </Modal>
        </footer>
    );
}

export default Footer;