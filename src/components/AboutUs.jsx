import CalendarIcon from '../icons/calendar.svg'
import PeopleIcon from '../icons/people.svg'
import RouteIcon from '../icons/route.svg'
import FireIcon from '../icons/fire.svg'

import '../styles/aboutus.css';

function AboutUs() {
    return (
        <div className="block__WithHeader" id="AboutUs">
            <span className="block__WidthHeader__Header">НЕМНОГО О НАС</span>
            <div className="AboutUs__body">
                <div className="icon__block">
                    <div className="icon__icon">
                        <img src={CalendarIcon} alt="иконка календаря"/>
                    </div>
                    <span className="icon__text"><span className="accentText">12 лет</span> на рынке<br/>экскурсий</span>
                </div>
                
                <div className="icon__block">
                    <div className="icon__icon">
                        <img src={PeopleIcon} alt="иконка календаря"/>
                    </div>
                    <span className="icon__text">5 <span className="accentText">опытных</span><br/>экскурсоводов</span>
                </div>

                <div className="icon__block">
                    <div className="icon__icon">
                        <img src={RouteIcon} alt="иконка календаря"/>
                    </div>
                    <span className="icon__text">постоянно <span className="accentText">улучшаем</span><br/>маршруты</span>
                </div>

                <div className="icon__block">
                    <div className="icon__icon">
                        <img src={FireIcon} alt="иконка календаря"/>
                    </div>
                    <span className="icon__text">наша команда <span className="accentText">горит</span><br/>своим делом</span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;