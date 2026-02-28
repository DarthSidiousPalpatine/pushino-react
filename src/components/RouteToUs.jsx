import '../styles/routetous.css';
import MapMarker from '../icons/logo100.svg';
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, reactify} from '../lib/ymaps';

const LOCATION = {
  center: [37.620970, 54.832494],
  zoom: 10
};

function RouteToUs() {
    return (
        <div className="block__WithHeader" id="RoadToUs">
            <span className="block__WidthHeader__Header">ПРОЕЗД ДО НАС</span>
            <div className="RTU__body">
                <div className="RTU__map">
                    <YMap location={reactify.useDefault(LOCATION)}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />

                        <YMapMarker coordinates={reactify.useDefault(LOCATION.center)} draggable={false}>
                            <div className="icon__block">
                                <div className="icon__icon">
                                    <img src={MapMarker} alt="иконка календаря"/>
                                </div>
                                <span className="icon__text"><span className="accentText">Пущино</span></span>
                            </div>
                        </YMapMarker>
                    </YMap>
                </div>
                <table className="RTU__table">
                    <tbody>
                        <tr>
                            <th>Маршрут</th>
                            <th>Отправление</th>
                            <th>Время в пути</th>
                            <th>Прибытие</th>
                        </tr>
                        <tr>
                            <td>Москва - Пущино</td>
                            <td>7:00</td>
                            <td>1ч 40мин</td>
                            <td>8:40</td>
                        </tr>
                        <tr>
                            <td>Москва - Пущино</td>
                            <td>9:00</td>
                            <td>2ч</td>
                            <td>11:00</td>
                        </tr>
                        <tr>
                            <td>Серпухов - Пущино</td>
                            <td>10:00</td>
                            <td>40мин</td>
                            <td>10:40</td>
                        </tr>
                        <tr>
                            <td>Пущино - Москва</td>
                            <td>19:00</td>
                            <td>1ч 40мин</td>
                            <td>20:40</td>
                        </tr>
                        <tr>
                            <td>Пущино - Серпухов</td>
                            <td>17:00</td>
                            <td>40мин</td>
                            <td>17:40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RouteToUs;