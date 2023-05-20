import React, { useMemo, useState } from 'react'

const PracticeMemo = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["Nadim", "Piyush", "Adlrin"]);
  // const calculations = expensiveCalculation(counter);
  const calculations = useMemo(() => expensiveCalculation(counter), [counter])
  // console.log(counter, "- counter")

  function addCounter() {
    setCounter((c) => c + 1)
  }
  function addTodo() {
    setTodos((t) => [...t, "Hello world"])
  }
  return (
    <div>
      <h2>Calculations :  {calculations}</h2>
      <h1>Counter  : {counter}</h1>
      <button onClick={addCounter}>Increment counter</button>
      <h1>Todos :</h1>
      {todos && todos.map((t) => (
        <div key={t}>
          {t}
        </div>
      ))}
      <button onClick={addTodo}>Add todo</button>
    </div>
  )
}

const expensiveCalculation = (number) => { // expensive / lengthyd calculation
  console.log("Calculating....")
  for (let i = 0; i < 1000000000; i++) {
    number += 1;
  }
  return number;
}

export default PracticeMemo