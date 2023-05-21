import React, { useReducer } from "react";
// Reducer function
const reducer = (state, action) => { // Step 4 // step 1.4
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }; // Step 5
        case "DECREMENT":
            return { count: state.count - 1 }; // step 1.5
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
};
const Reducer = () => {
    // Initial state
    const initialState = { count: 0 }; // state // step 6 // step 1.6

    // useReducer hook // dispatch - action
    const [state, dispatch] = useReducer(reducer, initialState); // Step 3 // step 1.3
    console.log(state,"- state here")
    // Event handlers
    const increment = () => {
        dispatch({ type: "INCREMENT" }); // Step 2
    };

    const decrement = () => {
        dispatch({ type: "DECREMENT" }); {/* Step 1.2. */}
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return (
        <div>
            <h2>Count: {state.count}</h2> {/* Step 7 // step 1.7 */}
            <button onClick={increment}>Increment</button> {/* Step 1  */} 
            <button onClick={decrement}>Decrement</button> {/* Step 1.1. */}
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Reducer;

