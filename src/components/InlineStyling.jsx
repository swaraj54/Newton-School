import React from 'react'

const InlineStyling = () => {
    const style = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
    };
    return (
        <div style={style}>
            <h1 >Hello, World!</h1>
            <p>This is a paragraph.</p>
        </div>
    );

}
export default InlineStyling