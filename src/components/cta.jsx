import CTAImage from '../images/CTA.webp';
import '../styles/cta.css';

function CTA() {
    return (
        <div className="CTA__body">
            <div className="CTA__contents">
                <img src={CTAImage} alt="красивый вид на Пущино"/>
                <div className="CTA__infoBlock">
                    <div className="CTA__textBlock">
                    <span className="CTA__header">Запланируйте отдых<br/>в Пущино <span className="accentText">через 9 дней</span></span>
                    <span className="CTA__text">выберите тур и получите <br/><span className="accentText">бесплатную</span> консультацию!</span>
                </div>
                <a href="#!" className="banner__Btn">Оставьте заявку прямо сейчас!</a>
                </div>
            </div>
        </div>
    );
}

export default CTA;