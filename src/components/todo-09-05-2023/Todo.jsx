import React, { useState } from 'react'
import './TodoStyles.css';
import Inbox from './Inbox';
import TodayComponent from './TodayComponent'
import Next7Days from './Next7Days';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    // console.log(todos, 'todos here')
    const [singleTodo, setSingleTodo] = useState("");
    // console.log(singleTodo,'singleTodo')
    const [date, setDate] = useState("");
    // console.log(date,"date")
    const [flagForToday, setFlagForToday] = useState(false);
    const [flagForSeven, setFlagForSeven] = useState(false);
    const [flagToShowFields, setFlagToShowFields] = useState(true)
    const handleChangeTodo = (event) => {
        // alert("handleChangeTodo")
        setSingleTodo(event.target.value)
    }
    const handleChangeDate = (event) => {
        // alert("handleChangeDate")
        setDate(event.target.value)
    }
    const AddTodo = (event) => {
        // console.log(date, singleTodo, "check here");
        if (singleTodo && date) {
            setTodos([...todos, { todo: singleTodo, date: date }]);
            setSingleTodo("");
            setDate("");
            alert("Todo Added.")
        } else {
            alert("Please fill all the fields!!")
        }
    }

    return (
        <div id="screen">
            <div id='left'>
                <div onClick={() => { setFlagForToday(false); setFlagForSeven(false) }}>Add Todos</div>
                <div onClick={() => { setFlagForToday(true); setFlagForSeven(false) }} >Today's Todo</div>
                <div onClick={() => { setFlagForSeven(true); setFlagForToday(false); }}>Next 7 days Todos</div>
            </div>
            <div id='right'>
                {!flagForToday && !flagForSeven &&
                    <>
                        {!flagToShowFields && <>
                            <input type='text' value={singleTodo} onChange={handleChangeTodo} />
                            <input type='date' value={date} onChange={handleChangeDate} /><br />
                            <button onClick={AddTodo}>Add Todo</button><br />
                            <button onClick={() => setFlagToShowFields(true)} >Cancel</button>
                        </>}
                        {flagToShowFields &&
                            <button onClick={() => setFlagToShowFields(false)}>Want to add todo ?</button>
                        }

                    </>
                }
                {todos.length > 0 && !flagForToday && !flagForSeven && <Inbox todos={todos} />}
                {!!flagForToday && <TodayComponent todos={todos} />}
                {!!flagForSeven && <Next7Days todos={todos} />}
            </div>
        </div>
    )
}

export default Todo