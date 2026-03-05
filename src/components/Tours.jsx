import React, { useState } from "react";
import '../styles/tours.css';
import { Paper, MobileStepper } from '@mui/material';
import { useSwipeable } from 'react-swipeable';
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, reactify} from '../lib/ymaps';
import data from '../data/tours.json';

function Tours() {
    const [chosenTour, setChosenTour] = useState("1");
    const [showText, toggleShowText] = useState(false);

    const chooseTour = (event) => {
        setChosenTour(event.currentTarget.dataset.value);

        if(showText) toggleText();
    }

    const toggleText = () => {
        toggleShowText(!showText);

        if(showText) document.getElementById("Tours").scrollIntoView();
    }

    const tourData = data.slice(chosenTour-1, chosenTour)[0];
    const picturesData = tourData["pictures"];
    const textData = tourData["text"];
    const iconsData = tourData["icons"];
    const mapData = tourData["map"];

    return (
        <div className="block__WithHeader" id="Tours">
            <span className="block__WidthHeader__Header">НАШИ ТУРЫ</span>
            <div className="Tours__body">
                <div className="Tours__SelectTour" style={chosenTour==="3" ? {left:'-120%'} : chosenTour==="2" ? {left:'-60%'} : {left:'0%'}}>
                    <button style={{borderLeftStyle: "none"}} data-value={1} className={chosenTour==="1" ? "Tours__SelectTour_Button --active" : "Tours__SelectTour_Button"} onClick={chooseTour}>Экологический</button>
                    <button data-value={2} className={chosenTour==="2" ? "Tours__SelectTour_Button --active" : "Tours__SelectTour_Button"} onClick={chooseTour}>Архитектурный</button>
                    <button style={{borderRightStyle: "none"}} data-value={3} className={chosenTour==="3" ? "Tours__SelectTour_Button --active" : "Tours__SelectTour_Button"} onClick={chooseTour}>Астрономический</button>
                </div>
                <div className="Tours__Main">
                    {picturesData && Slider(picturesData)}

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
                        <YMap location={reactify.useDefault({center: [mapData["coordY"], mapData["coordX"]], zoom: mapData["zoom"]})} behaviors={[]}>
                            <YMapDefaultSchemeLayer />
                            <YMapDefaultFeaturesLayer />

                            {mapData && mapData["points"].map((point, index) =>
                                <YMapMarker key={index} coordinates={reactify.useDefault({center: [point["coordY"], point["coordX"]], zoom:5}.center)} draggable={false}>
                                    <div className="icon__block">
                                        <div className="icon__icon">
                                            <img src={require(`../images/${point["img"]}`)} alt="иконка календаря"/>
                                        </div>
                                    </div>
                                </YMapMarker>
                            )}
                        </YMap>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tours;


function Slider(data) {
    const [activeStep, setActiveStep] = useState(0);

    const goNext = () => {
        if(activeStep < data.length - 1) setActiveStep((activeStep) => activeStep + 1);
    };

    const goBack = (step) => {
        if(activeStep > 0) setActiveStep((activeStep) => activeStep - 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: goNext,
        onSwipedRight: goBack,
        trackMouse: true,
        delta: 10,
    });

    const pictureData = data[activeStep];

    return (
        <div className="Tours__Pictures">
            <Paper className="Paper" {...handlers}>
                <img src={require(`../images/${pictureData.img}`)} alt={pictureData.imgName} onDragStart={(e) => e.preventDefault()}/>
                <MobileStepper className="Stepper" variant="dots" steps={data.length} position="static" activeStep={activeStep}/>
            </Paper>
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
        );
    }

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
