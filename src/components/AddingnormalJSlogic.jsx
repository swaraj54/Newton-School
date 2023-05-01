import React, { useState } from 'react'

const AddingnormalJSlogic = () => {
    const [showText, setShowText] = useState(true);
    // const [test, setTest] = useState("true");
    const handleClick = () => {
        setShowText(!showText);
    };
    return (
        <div>
            <button onClick={handleClick}>Toggle Text</button>
            {showText && <p>first</p>} 
        {/* is showtext(true) is there then only i will you next part else nothing
            {test || <p>second</p>}
        if test is there/true then ill show test and if test is false/empty ill show next element */}
        </div>
    );
}

export default AddingnormalJSlogic