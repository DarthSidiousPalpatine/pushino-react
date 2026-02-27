import HeroImage from '../images/hero.webp';
import '../styles/hero.css';

function Hero() {
    return (
        <div className="hero__image">
            <img src={HeroImage} alt="Пущино телескоп"/>
            <div className="hero__bannerInfo">
                <div className="hero__textBlock">
                    <span className="hero__header">ЭКСКУРСИИ И ТУРЫ <br/> В ПУЩИНО</span>
                    <span className="hero__text">- наукоград, опередивший время</span>
                </div>
                <button className="banner__Btn">Оставить заявку</button>
            </div>
        </div>
    );
}

export default Hero;