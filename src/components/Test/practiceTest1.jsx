import React, { useState } from 'react'
import Today from './Today';
import SevenDay from './SevenDay';

const Test1 = () => {
  const [todo, setTodo] = useState([]);
  // console.log(todo, "todo list ")
  const [singleTodo, setSingleTodo] = useState("");
  // console.log(singleTodo, "singleTodo her")
  const [date, setDate] = useState("");
  const [flagForToday, setFlagForToday] = useState(false)
  const [flagForSeven, setFlagForSeven] = useState(false)
  console.log(flagForSeven, flagForToday, " here")
  const handleChangeForDate = (event) => {
    setDate(event.target.value);
  }
  const handleChangeForTodo = (event) => {
    setSingleTodo(event.target.value);
  }
  const submitData = (event) => {
    event.preventDefault();
    if (date) {
      setTodo([...todo, { todo: singleTodo, date: date }]);
      setSingleTodo("")
      setDate("")
    } else {
      alert("Please select the date..")
    }
  }
  return (
    <div style={{ width: '100%', border: '5px solid black', display: 'flex', justifyContent: "space-around" }}>
      <div style={{ height: "500px", width: "15%", border: '5px solid red' }}>
        <div onClick={() => { setFlagForToday(false); setFlagForSeven(false) }}>Inbox</div>
        <div style={{ cursor: 'pointer' }} onClick={() => { setFlagForToday(true); setFlagForSeven(false) }}>Today</div>
        <div style={{ cursor: 'pointer' }} onClick={() => { setFlagForToday(false); setFlagForSeven(true) }}>Next 7 Days</div>
      </div>
      <div style={{ height: "500px", width: "75%", border: '5px solid red' }}>
        {!flagForSeven && !flagForToday &&
          <>
            <input type='text' value={singleTodo} onChange={handleChangeForTodo} />
            <input type='date' value={date} onChange={handleChangeForDate} />
            <button onClick={submitData}>Add todo !</button>

            <div>
              {todo.map((e, i) => (
                <div key={i} style={{ display: 'flex', width: '20%', margin: "auto", justifyContent: 'space-between' }}>
                  <h3>{e.todo}</h3>
                  <h3>{e.date}</h3>
                </div>
              ))}
            </div>
          </>
        }
        {flagForToday && <Today todos={todo} />}
        {flagForSeven && <SevenDay todos={todo} />}


      </div>
    </div>
  )
}

export default Test1