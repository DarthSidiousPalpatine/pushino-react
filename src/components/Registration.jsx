
import { useState } from 'react';
import '../styles/registration.css'
import { Modal } from '@mui/material';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        phone: '',
        destination: '',
        agree: ''
    });
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Имя обязательно';
        }

        if (!formData.mail) {
            newErrors.mail = 'E-mail обязателен';
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail))) {
            newErrors.mail = 'Некорректный e-mail';
        }

        if (!formData.phone) {
            newErrors.phone = 'Телефон обязателен';
        } else if (!(/^\+7|8\d{10}$/.test(formData.phone))) {
            newErrors.phone = 'Некорректный номер';
        }

        if (!formData.agree) {
            newErrors.agree = 'Нужно согласие';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsModalOpen(true);
            e.target.reset();
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({ username: '', email: '', password: '', agree: false });
    };

    return (
        <div className="block__WithHeader" id="Registration">
            <span className="block__WidthHeader__Header">ЗАПИШИТЕСЬ НА ТУР В ПУЩИНО<br/><span className="block__WithHeader__SmallHeader">мы свяжемся с вами для уточнения деталей</span></span>
            <form onSubmit={handleSubmit} className="Registration__body">
                <div className="Registration__fields">
                    <input onChange={handleChange} name="name" className="Registration__inputField" type="text" required={true} placeholder="Ваше имя"/>
                    <input onChange={handleChange} name="mail" className="Registration__inputField" type="email" required={true} placeholder="Ваш e-mail"/>
                    <input onChange={handleChange} name="phone" className="Registration__inputField" type="tel" required={true} placeholder="Ваш номер телефона"/>
                    <input onChange={handleChange} name="destination" className="Registration__inputField" type="text" required={true} placeholder="Понравившийся вам маршрут"/>
                    <div className="Registration__inputCheck"><input onChange={handleChange} name="agree" className="Registration__checkBox" type="checkbox" required={true}/> <span>Я даю согласие на обработку моих персональных данных</span></div>
                </div>
                <input name="Submit Button" className="banner__Btn" type="submit" value="Оставить заявку"/>
            </form>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <div className="Registration__modal"  onClick={handleCloseModal}>
                    <p>Спасибо за вашу заявку, <span className="accentText">в скором времени мы свяжемся с вами</span> для уточнения деталей поездки.</p>
                </div>
            </Modal>
        </div>
    );
}

export default Registration;