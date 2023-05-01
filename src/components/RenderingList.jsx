import React from 'react'

const RenderingList = () => {

    const items = ['Apple', 'Banana', 'Orange', "Nadim", "Newton School"];
    return (
        <ul>
            <li>Lopa</li>
            <li>Deepak</li>
            <li>Yogesh</li>
            {items.map((item) => (
                <li> {item} </li>
            ))}
        </ul>
    );
}

export default RenderingList