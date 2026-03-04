import React, { useState } from "react";
import '../styles/tours.css';
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, /*YMapMarker,*/ reactify} from '../lib/ymaps';
import data from '../data/tours.json';

function Tours() {
    const [chosenTour, setChosenTour] = useState("1");
    const [chosenPicture, setChosenPicture] = useState(1);
    const [showText, toggleShowText] = useState(false);

    const chooseTour = (event) => {
        setChosenTour(event.currentTarget.dataset.value);
    }

    const toggleText = () => {
        toggleShowText(!showText);
    }

    const LOCATION = {
        center: [37.620970, 54.832494],
        zoom: 10
    };

    const get_stars = (starCount) => {
        let result = "";
        for(let i = 0; i < starCount; i++) {
              result+="★ ";
        }
        return result;
    }
    const get_rating = (ratingNum, id) => {
        let result = [];
        result.push(<span key={id + 10} className="feedback_accent">{get_stars(ratingNum)}</span>);
        if(ratingNum < 5) {
            result.push(<span key={id + 20} className="feedback_normal">{get_stars(5 - ratingNum)}</span>);
        }
        return <span key={id} className="feedback_rating">{result}</span>;
    }

    const tourData = data.slice(chosenTour-1, chosenTour)[0];
    const pictureData = tourData["pictures"][chosenPicture];
    const textData = tourData["text"];
    const iconsData = tourData["icons"];
    const mapData = tourData["map"];

    return (
        <div className="block__WithHeader" id="Tours">
            <span className="block__WidthHeader__Header">НАШИ ТУРЫ</span>
            <div className="Tours__body">
                <div className="Tours__SelectTour">
                    <button style={{borderLeftStyle: "none"}} data-value={1} className={chosenTour==="1" ? "Tours__SelectTour_Button --active" : "Tours__SelectTour_Button"} onClick={chooseTour}>Экологический</button>
                    <button data-value={2} className={chosenTour==="2" ? "Tours__SelectTour_Button --active" : "Tours__SelectTour_Button"} onClick={chooseTour}>Архитектурный</button>
                    <button style={{borderRightStyle: "none"}} data-value={3} className={chosenTour==="3" ? "Tours__SelectTour_Button --active" : "Tours__SelectTour_Button"} onClick={chooseTour}>Астрономический</button>
                </div>
                <div className="Tours__Pictures">
                    {pictureData && <img src={require(`../images/${pictureData.img}`)} alt={pictureData.imgName}/>}
                    <div className="Tours__Feedback">
                        {pictureData && pictureData.feedback.map((feedback) =>
                            <div className="Tours__Feedback_article" key={feedback.id}>
                                <div className="Tours__Feedback_block">
                                    <div className="Tours__Feedback_header">
                                        <span className="Tours__Feedback_name">{feedback.name}</span>
                                        {get_rating(feedback.rating, feedback.id)}
                                    </div>
                                    <p>{feedback.text}</p>
                                    <div className="Tours__Feedback_border"/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="Tours__Information">
                    <div className="Tours__Information_Block">
                        <p className={showText ? "Tours__Information_Text --fullText" : "Tours__Information_Text"}>
                            {textData && textData.map((paragraph, index) =>
                                <span key={index}>{paragraph}<br/></span>
                            )}
                        </p>
                        <div className="Tours__Information_Icons">
                            {iconsData && iconsData.map((icon, index) =>
                                <div key={index} className="icon__block">
                                    <div className="icon__icon">
                                        <img src={require(`../icons/${icon.icon}`)} alt={icon.iconName}/>
                                    </div>
                                    {icon.text.map((line, index2) =>
                                        <span key={index2} className={line.accent ? "accentText" : "icon__text"}>{line.text}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <button className="Tours__ShowMore_Button" onClick={toggleText}>{showText ? "⯅" : "подробнее"}<br/>{showText ? "свернуть": "⯆"}</button>
                </div>

                <div className="Tours__Map">
                    <YMap location={reactify.useDefault(LOCATION)}>
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                    </YMap>
                </div>
            </div>
        </div>
    );
}

export default Tours;