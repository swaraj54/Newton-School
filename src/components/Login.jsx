import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const router = useNavigate();
  return (
    <div>
      <h1>Login for newton school</h1>
      <button onClick={() => router(`/singleproduct/${12345678}`)}>Click here</button>
    </div >
  )
}

export default Login