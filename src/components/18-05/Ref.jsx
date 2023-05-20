import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    // const [value, setValue] = useState('');
    // const count = useRef(0);
    // useEffect(() => {
    //     count.current = count.current + 1;
    // })
    // return (
    //     <div>
    //         <h2> {count.current}</h2>
    //         <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    //     </div>
    // );

    const [value, setValue] = useState('');
    const prevState = useRef("");
    // const [prevStateInsideState, setPrevStateInsideState] = useState("");
    useEffect(() => {
        prevState.current = value;
        // setPrevStateInsideState(value)
    }, [value])
    function handleSubmit(event) {
        event.preventDefault();
        console.log("called function")
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>  useRef :  {prevState.current}</h2>
            {/* <h2>  state:  {prevStateInsideState}</h2> */}
            <h2> current state: {value}</h2>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type='submit'>Submit!!</button>
        </form>
    );
}
export default Ref