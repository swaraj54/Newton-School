import React, { useState } from 'react'

const StatefulList = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
    console.log(items, "items here")
    const [currentFruit, setCurrentFruit] = useState("");
    // console.log(currentFruit,"- currentFruit");
    function handleCurrentFruit(event) {
        // alert("INside handleCurrentFruit")
        // console.log(event.target.value,"- event.target.value here")
        setCurrentFruit(event.target.value);
    }
    function addCurrentFruitToArray() {
        // alert(currentFruit)
        setItems([...items, currentFruit])
        setCurrentFruit("")
    }
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h1>Here is what you typing - {currentFruit}</h1>
            <input type='text' value={currentFruit} onChange={handleCurrentFruit} /><br />
            <button onClick={addCurrentFruitToArray}>Click to add to list</button>
        </div>
    );

}
export default StatefulList