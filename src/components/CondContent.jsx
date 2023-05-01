import React, { useState } from 'react'

const CondContent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn,"isLoggedIn")
    return (
        <div>
            {isLoggedIn ? (
                <p>Welcome, user!</p>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Log in</button>
            )}
        </div>
    );

}

export default CondContent