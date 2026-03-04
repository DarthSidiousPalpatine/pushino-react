import React, { useState } from "react";
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
                {data && data.slice(0, showMore ? data.length : 1).map((fileData, index) =>
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
            <button className="POI__button" onClick={ShowMoreLess}>
                {showMore ? "⯅" : "подробнее"}<br/>{showMore ? "свернуть": "⯆"}
            </button>
        </div>
    );
}

export default POI;