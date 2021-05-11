import React, { useContext, useState } from 'react';
import { StateContext } from "./SelectState";
const SelectLandMark = ({ currentState, cityIndex }) => {
    // const state = useContext(StateContext);
    const [currentLandmark, setCurrentLandmark] = useState(currentState.city[cityIndex].landmarks[0]);
    const handleLandmark = (e) => {
        // const landmarkIndex = parseInt(e.target.value);
        setCurrentLandmark(currentState.city[cityIndex].landmarks[landmarkIndex]);
        // console.log(currentState.city[cityIndex].landmarks[0]);
    }
    return (
        <div>
            <label htmlFor="landmarks">Landmarks : </label>
            <select name="landmarks" id="landmark" onChange={handleLandmark}>
                {
                    currentState.city[cityIndex].landmarks.map((landmark, index) => <option key={index} value={index}>{landmark.name}</option>)
                }
            </select>
            <div className="info">
                <div id="landmark-name">
                    <h2>{currentLandmark.name}</h2>
                </div>
                <div id="landmark-description">
                    <p>{currentLandmark.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SelectLandMark;