import React, { useState } from 'react';
import SelectLandMark from './SelectLandMark';

const SelectCity = ({ currentState/*, currentCity, setCurrentCity*/ }) => {
    const [currentCity, setCurrentCity] = useState(currentState.city[0]);
    // const oldState=currentState;
    // console.log(oldState.city[0]);
    // console.log(currentState.city[0]);

    // if(oldState!==currentState){
    //     setCurrentCity(currentState.city[0].name);
    // }
    const [cityIndex, setCityIndex] = useState(0);
    const handleCity = (e) => {
        const cityIndex = parseInt(e.target.value);
        setCurrentCity(currentState.city[cityIndex]);
        setCityIndex(cityIndex);
        // console.log(currentCity);
    }
    return (
        <div>
            <label htmlFor="cities">Cities : </label>
            <select name="cities" id="city" onChange={handleCity}>
                {
                    currentState.city.map((city, index) => <option key={index} value={index}>{city.name}</option>)
                }
            </select>
            <br /><br />
            <SelectLandMark currentState={currentState} cityIndex={cityIndex} />
            <div className="info">
                <div>
                    <h2>{currentCity.name}</h2>
                </div>
                <div>
                    <p>{currentCity.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SelectCity;