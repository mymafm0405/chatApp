import React from 'react'

export default function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Mahmoud Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Email address' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Sign in</button>
                <p>Need an account? Register</p>
            </form>
        </div>
    </div>
  )
}
