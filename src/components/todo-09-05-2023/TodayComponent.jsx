import React from 'react'
import ListRender from './ListRender';

const TodayComponent = ({ todos }) => {
    console.log(todos, 'todos in today compeon')
    const todaysDate = new Date().toISOString().substr(0, 10);
    // console.log(todaysDate, "todaysDate here")
    const todaysTodos = todos.filter((todo) => todo.date == todaysDate);
    console.log(todaysTodos, "todaysTodos here")

    return (
        <div>
            <h1>Today's Todo</h1>
            {todaysTodos && <ListRender list={todaysTodos} />}
            {/* {todaysTodos && todaysTodos.map((e, i) => (
                <div id='today-list' key={i} >
                    <h3>Todo - {e.todo}</h3>
                    <h4>Date - {e.date}</h4>
                </div>
            ))} */}
        </div>
    )
}

export default TodayComponent