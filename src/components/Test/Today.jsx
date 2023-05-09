import React from 'react'

const Today = ({ todos }) => {
    // console.log(todos, 'props')
    const today = new Date().toISOString().substr(0, 10);; // Get today's date in 'YYYY-MM-DD' format
    console.log(today);
    const todayTasks = todos.filter((task) => task.date === today);

    return (
        <div>{todayTasks && todayTasks.map((e) => (
            <div key={e.todo}>
                <h1>{e.todo}</h1>
                <h1>{e.date}</h1>
            </div>
        ))}</div>
    )
}

export default Today