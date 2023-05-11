import React, { useState } from 'react'

const ButtonAction = () => {
    const [showData, setShowData] = useState(false);
    console.log(showData, "show data herer")
    return (
        <div>
            <h1>Button action Topics</h1>
            <button id='click' onClick={() => setShowData(true)} >Click to See Paragraph...</button>
            {showData && <p id='para' >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
        </div>
    )
}

export default ButtonAction