import React, { useState } from 'react'

function New() {
    let [Number, setNumber] = useState(0)
    const AddNumber = () => {
        if (Number < 20) {
            setNumber(Number + 1)
        }
    }
    const RemoveNumber = () => {
        if (Number > 0) {
            setNumber(Number - 1)
        }
    }

    return (
        <>
            <h1> Numbers for Counter </h1>
            <h2>Value Of Numbers: {Number}</h2>
            <button onClick={AddNumber}>AddNumber {AddNumber}</button>
            <button onClick={RemoveNumber}>RemoveNumber {RemoveNumber}</button>
            <footer>The Numbers is: {Number}</footer>
        </>
    )
}

export default New;