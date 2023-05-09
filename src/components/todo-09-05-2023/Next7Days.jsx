import React from 'react'
import ListRender from './ListRender';

const Next7Days = ({ todos }) => {
    console.log(todos, 'todos inside 7dayf compono')
    const today = new Date().getTime();
    console.log(today, "today her")
    const nextWeek = today + (7 * 24 * 60 * 60 * 1000);
    console.log(nextWeek, "nextWeek")
    const nextSevenDaysTodos = todos.filter(todo => {
        const todoDate = new Date(todo.date).getTime();
        return todoDate >= today && todoDate <= nextWeek
    });
    console.log(nextSevenDaysTodos, "nextSevenDaysTodos here")
    return (
        <div>
            {nextSevenDaysTodos && <ListRender list={nextSevenDaysTodos} />}
            {/* {nextSevenDaysTodos && nextSevenDaysTodos.map((e, i) => (
                <div id='next-list' key={i}>
                    <h3>{e.todo}</h3>
                    <h4>{e.date}</h4>
                </div>
            ))} */}
        </div>
    )
}

export default Next7Days