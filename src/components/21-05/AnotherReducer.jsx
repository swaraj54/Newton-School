import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 }
        case 'DECREMENT':
            return { counter: state.counter - 1 }
        case 'RESET':
            return { counter: 0 }
        default:
            return state;
    }
}

const AnotherReducer = () => {

    const initialState = { counter: 0 };

    const [state, dispatch] = useReducer(reducer, initialState)

    const Increment = () => {
        dispatch({ type: "INCREMENT" })
    }
    const Decrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    const Reset = () => {
        dispatch({ type: "RESET" })
    }
    return (
        <div>
            <h2>useReducer</h2>
            <h1>Counter   : {state.counter} </h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default AnotherReducer