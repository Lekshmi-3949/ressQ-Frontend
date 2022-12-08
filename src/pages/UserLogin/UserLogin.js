import React from 'react'
import './UserLogin.css'
const UserLogin = () => {
  return (
    <div className='login__form_main'>
      <div className="login_form__container"></div>
      <form action="" className='login__form'>
        <p className='login__header'>Login</p>
        <input className='login__input' type="text" placeholder='user name' required/>
        <input className='login__input' type="password" placeholder='password' required/>
        <input className='login__input' type="text" placeholder='phone number' />
        <button className='login__button'>Log in</button>
      </form>
    </div>
  )
}

export default UserLogin
