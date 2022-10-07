import React from 'react'
import Add from '../images/add.png'

export default function Register() {
  return (
    <div className='container'>
        <div className='wrapper'>
            <span className='logo'>Mahmoud Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Display name' />
                <input type="email" placeholder='Email address' />
                <input type="password" placeholder='Password' />
                <input type='file' id='id' style={{display: 'none'}}/>
                <label htmlFor='id'>
                    <img src={Add} alt='Add' />
                    <span>Add avatar</span>
                </label>
                <button type='submit'>Register</button>
                <p>Have an account? Login</p>
            </form>
        </div>
    </div>
  )
}
