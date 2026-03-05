import logoIcon from '../icons/logo100.svg'
import burgerIcon from '../icons/burger.svg'
import '../styles/header.css';
import { useState } from 'react';
import { Modal } from '@mui/material';

function Header() {
    const [burgerOpen, toggleBurger] =  useState(false);

    const openModal = () => {
        toggleBurger(() => (true));
    }

    const handleCloseModal = () => {
        toggleBurger(false);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logoIcon} alt='logo' />
            </div>
            <div className="header__menu">
                <ul>
                    <li>
                        <a href="#Tours">наши туры</a>
                    </li>
                    <li>
                        <a href="#POI">интересные места</a>
                    </li>
                    <li>
                        <a href="#Registration">записаться</a>
                    </li>
                    <li>
                        <a href="#RoadToUs">как доехать</a>
                    </li>
                    <li>
                        <a href="#AboutUs">о нас</a>
                    </li>
                </ul>
            </div>
            <img src={burgerIcon} className="header__burger" onClick={openModal}/>
            <Modal open={burgerOpen} onClose={handleCloseModal}>
                <div className="Header__modal">
                    <a href="#Tours" onClick={handleCloseModal}>наши туры</a>
                    <a href="#POI" onClick={handleCloseModal}>интересные места</a>
                    <a href="#Registration" onClick={handleCloseModal}>записаться</a>
                    <a href="#RoadToUs" onClick={handleCloseModal}>как доехать</a>
                    <a href="#AboutUs" onClick={handleCloseModal}>о нас</a>
                </div>
            </Modal>
        </header>
    );
}

export default Header;