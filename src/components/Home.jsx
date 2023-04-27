import React, { useEffect, useState } from 'react';
const Home = () => {
    const [counter, setCounter] = useState(100);
    const [counter2, setCounter2] = useState(33);
    function addCount() {
        setCounter(counter + 1);
    };
    function addCount2() {
        setCounter2(counter2 + 1);
    }

    // Type 4 : Multiple dependencies 
    useEffect(()=> { console.log("useEffect excuted the function..")}, [counter, counter2])
    // It'll execute the code at very first time when component will render on broswer and
    // Whenever passed any dependencies chnages

    // Type 3 : Single Dependency
    // useEffect(() => { console.log("useEffect excuted the function..") }, [counter])
    // It'll execute the code at very first time when component will render on browser and
    //  whenever passed depedency will update

    // Type 1 - No dependencies
    // useEffect(() => { console.log("useEffect excuted the function..") });
    //  it'll execute the function very first render and whenever page re-render..

    // Type 2 : Empty Dependency
    // useEffect(() => { console.log("useEffect excuted the function..") }, [])
    // It'll execute the function on only very first render
    return (
        <div>
            <h1>First counter - {counter}</h1>
            <button onClick={addCount}>Add count by 1.</button>

            <h1>Second counter - {counter2}</h1>
            <button onClick={addCount2}>Add count by 1 to Second counter..</button>
        </div>
    )
}

export default Home