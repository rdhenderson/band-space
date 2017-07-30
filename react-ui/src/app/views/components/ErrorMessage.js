import React from 'react'
import { Link } from 'react-router-dom'
const ErrorMessage = ({ message, onRetry }) => (
  <div>
    <p> Oops.  Something went wrong. {message} </p>
    <button onClick={onRetry}> Try Again? </button>
    <Link to='/'><p>Return to home page.</p></Link>
  </div>
);

export default ErrorMessage
