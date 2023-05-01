import React from 'react'

const DeclerativeWay = ({ items }) => {
    console.log(items, "items")
    return (
        <div>
            <h1>DeclerativeWay</h1>
            <ul>
                {items.map((item,i) => (
                    <li>{item}</li>
                ))}
            </ul>
            {/* <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul> */}
        </div>
    )
}

export default DeclerativeWay