import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const router = useNavigate();

    return (
        <>
            <button onClick={() => router('/login')}>Click here to go on Login page</button>
            <button onClick={() => router('/register')}>Click here to go on Register </button>
            <button onClick={() => router("/")}>Click here to go on Homepage</button>
        </>

    )
}

export default Button