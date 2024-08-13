import React, { useState } from 'react';
import '../styles/Counter.css';

function Counters() {
    const [counter, setCounter] = useState(0);

    const AddValue = () => {
        if (counter < 20) {
            setCounter(counter + 1);
        }
    }

    const RemoveValue = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="counter-container">
            <h1 className="counter-heading">New Number Counter</h1>
            <h3 className="counter-value">Counter Value: {counter}</h3>
            <button className="counter-button" onClick={AddValue}>Add Value</button>
            <button className="counter-button" onClick={RemoveValue}>Remove Value</button>
        </div>
    );
}

export default Counters;
