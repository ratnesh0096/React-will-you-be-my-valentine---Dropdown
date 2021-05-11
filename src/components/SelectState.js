import React, { createContext, useState } from 'react';
import SelectCity from './SelectCity';

// export const StateContext = createContext();
const SelectState = ({ states }) => {
    const [currentState, setCurrentState] = useState(states[0]);
    // const [currentCity, setCurrentCity] = useState(currentState.city[0]);
    const handleState = (e) => {
        const stateIndex = parseInt(e.target.value);
        setCurrentState(states[stateIndex]);
        // setCurrentCity(currentState.city[0]);
    }
    return (
        <div>
            {/* <StateContext.Provider value={currentState}> */}
            <label htmlFor="states">States : </label>
            <select name="states" id="state" onChange={handleState}>
                {
                    states.map((state, index) => <option key={index} value={index}>{state.name}</option>)
                }
            </select>
            <br /> <br />
            <SelectCity currentState={currentState} /*currentCity={currentCity} setCurrentCity={setCurrentCity}*/ />
            <div className="info">
                <div id="state-name">
                    <h2>{currentState.name}</h2>
                </div>
                <div id="state-description">
                    <p>{currentState.description}</p>
                </div>
            </div>
            {/* </StateContext.Provider> */}
        </div>
    );
};

export default SelectState;
// export StateContext;