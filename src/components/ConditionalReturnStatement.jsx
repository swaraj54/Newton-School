import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const ConditionalReturnStatement = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (isLoggedIn) {
        // return <h1>Welcome !</h1>;
        return <Login />;
    } else {
        // return <h1>Please log in.</h1>;
        return <Register />;
    }

}

export default ConditionalReturnStatement