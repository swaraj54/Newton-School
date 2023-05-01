import React from 'react'

const ComplexJsxCondRend = ({ isLoggedIn }) => {
    console.log(isLoggedIn, 'isLoggedIn')
    return (
        <div>
            <h1>ComplexJsxCondRend</h1>
            { (isLoggedIn == "true") ? <p>TRUE</p> : <p>FALSE</p>}
        </div>
    )
}

export default ComplexJsxCondRend;