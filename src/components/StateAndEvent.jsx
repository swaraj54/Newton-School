import React, { useState, useEffect } from 'react';

const StateAndEvent = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        setCount(count - 1);
    };
    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}
export default StateAndEvent



