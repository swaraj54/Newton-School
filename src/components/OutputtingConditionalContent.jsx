import React, { useState } from 'react'

const OutputtingConditionalContent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
export default OutputtingConditionalContent