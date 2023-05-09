import React from 'react'

const Inbox = ({ todos }) => {
    console.log(todos, "props cehcek here")
    return (
        <div >
            <h3>Inside Inbox Component</h3>
            {todos && todos.map((e, i) => (
                <div id='code' key={i}>
                    <h3>Todo - {e.todo}</h3>
                    <h4>Date -{e.date}</h4>
                </div>
            ))}
        </div>
    )
}

export default Inbox