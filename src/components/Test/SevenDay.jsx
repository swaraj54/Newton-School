import React from 'react'

const SevenDay = ({ todos }) => {
    const today = new Date().getTime(); // Get today's date and time in milliseconds
    const nextWeek = today + (7 * 24 * 60 * 60 * 1000); // Get the date and time 7 days from now in milliseconds

    const nextWeekTasks = todos.filter(task => {
        const taskDate = new Date(task.date).getTime(); // Get the task's date and time in milliseconds
        return taskDate >= today && taskDate <= nextWeek; // Check if the task's date is within the next 7 days
    });

    console.log(nextWeekTasks);
    return (
        <div>{nextWeekTasks && nextWeekTasks.map((e) => (
            <div key={e.todo}>
                <h1>{e.todo}</h1>
                <h1>{e.date}</h1>
            </div>
        ))}</div>
    )
}

export default SevenDay