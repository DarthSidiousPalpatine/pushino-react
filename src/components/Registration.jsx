import '../styles/registration.css'

function Registration() {
    return (
        <div className="block__WithHeader" id="POI">
            <span className="block__WidthHeader__Header">ЗАПИШИТЕСЬ НА ТУР В ПУЩИНО<br/><span className="block__WithHeader__SmallHeader">мы свяжемся с вами для уточнения деталей</span></span>
            <div className="Registration__body">
                <div className="Registration__fields">
                    <input name="Enter Name" className="Registration__inputField" type="text" required={true} placeholder="Ваше имя"/>
                    <input name="Enter Email" className="Registration__inputField" type="email" required={true} placeholder="Ваш e-mail"/>
                    <input name="Enter Telephone" className="Registration__inputField" type="tel" required={true} placeholder="Ваш номер телефона"/>
                    <input name="Enter Tour" className="Registration__inputField" type="text" required={true} placeholder="Понравившийся вам маршрут"/>
                    <div className="Registration__inputCheck"><input name="Agree" className="Registration__checkBox" type="checkbox" required={true}/> <span>Я даю согласие на обработку моих персональных данных</span></div>
                </div>
                <input name="Submit Button" className="banner__Btn" type="submit" value="Оставить заявку"/>
            </div>
        </div>
    );
}

export default Registration;