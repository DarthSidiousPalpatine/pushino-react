import { useState } from "react";
import { Paper, MobileStepper } from '@mui/material';
import { useSwipeable } from 'react-swipeable';
import data from '../data/poi.json';

import '../styles/poi.css';

function POI() {
    const [showMore, toggleShowState] = useState(false);

    const ShowMoreLess = () => {
        toggleShowState(!showMore);
        if(showMore) document.getElementById("POI").scrollIntoView();
    }

    return (
        <div className="block__WithHeader" id="POI">
            <span className="block__WidthHeader__Header">ИНТЕРЕСНЫЕ МЕСТА</span>
            <div className="POI__body">
                {data && data.slice(0, showMore ? data.length : 3).map((fileData, index) =>
                    <div className={index%2 ? "POI__card inverted" : "POI__card"} key={index}>
                        <img src={require(`../images/${fileData.img}`)} alt={fileData.imgName}/>
                        <div className="POI__text">
                            <p className="POI__textHeader">{fileData.imgName}</p><br/>
                            {fileData.text && fileData.text.map((textData, index2) =>
                            <p key={index2}>{textData}<br/><br/></p>)}
                        </div>
                    </div>
                )}
            </div>
            {Slider()}
            <button className="POI__button" onClick={ShowMoreLess}>
                {showMore ? "⯅" : "подробнее"}<br/>{showMore ? "свернуть": "⯆"}
            </button>
        </div>
    );
}

export default POI;


function Slider() {
  const [activeStep, setActiveStep] = useState(0);

  const goNext = () => {
    if(activeStep < data.length - 1) setActiveStep((activeStep) => activeStep + 1);
  };

  const goBack = () => {
    if(activeStep > 0) setActiveStep((activeStep) => activeStep - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goBack,
    trackMouse: true,
    delta: 10,
  });

  return (
    <div className="POI__body_mobile">
        <Paper className="Paper" {...handlers}>
            <img src={require(`../images/${data[activeStep].img}`)} alt={data[activeStep].imgName}/>
            <MobileStepper className="Stepper" variant="dots" steps={data.length} position="static" activeStep={activeStep}/>
        </Paper>
        <div className="POI__text">
            <p className="POI__textHeader">{data[activeStep].imgName}</p><br/>
            {data[activeStep].text && data[activeStep].text.map((textData, index2) =>
            <p key={index2}>{textData}<br/><br/></p>)}
        </div>
    </div>
  );
}
