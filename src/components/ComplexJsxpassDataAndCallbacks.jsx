import React from 'react';

const MyChildComponent = ({ text, onClick }) => { // Step 2
    return <button onClick={onClick} > {text}</button >; // Step 1
}
const ComplexJsxpassDataAndCallbacks = () => {
    const handleClick = () => { // Step 4
        alert('Button clicked!');
    };
    return <MyChildComponent text="Newton School" onClick={handleClick} />; //Step 3
};
export default ComplexJsxpassDataAndCallbacks;