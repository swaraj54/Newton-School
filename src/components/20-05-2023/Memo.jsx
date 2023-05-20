import { useEffect, useMemo, useState } from "react";

const Memo = () => {
    const [count, setCount] = useState(0);
    // console.log(count, "- count")
    const [todos, setTodos] = useState([]);
    // console.log(todos,"- todos here")
    // const calculation = expensiveCalculation(count);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    // useMemo(()=> {}, [any])
    // useEffect(()=> {}, [any])

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                <h2>Count: {count}</h2>
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation - {calculation}</h2>
                
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => { //  Expensive / lengthy calculation
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    } // 1 sec
    return num;
};
export default Memo;

