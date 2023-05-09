import React from 'react'

const ListRender = ({ list }) => {
    return (
        <div>
            <h1>List Render</h1>
            {list && list.map((e, i) => (
                <div id='next-list today-list' key={i}>
                    <h3>{e.todo}</h3>
                    <h4>{e.date}</h4>
                </div>
            ))}
        </div>
    )
}

export default ListRender