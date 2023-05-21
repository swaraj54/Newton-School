import { useState, useCallback } from "react";
import Todos from "./Todos";
const Calls = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["New todo"]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => {
        setTodos((deepak) => [...deepak, "New Todo"]);
    }, [todos])
    // const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    // }, [todos]);
    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />  {/* Component */}
            <hr />
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};
export default Calls;