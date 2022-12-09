import React from 'react'
import './UserLoginR.css'
import MainLayout from '../../components/MainLayout/MainLayout'
const UserLoginR = () => {
  return (
    <div>
       <MainLayout>
    <div className='loginR__form_main'>
      <div className="loginR_form__container"></div>
      <form action="" className='loginR__form'>
        <p className='loginR__header'>Login</p>
        <input className='loginR__input' type="text" placeholder='user name' required/>
      
        <input className='loginR__input' type="text" placeholder='phone number' />
        <button className='loginR__button'>Log in</button>
        {/* <p className="forgot-password text-right mt-2"> */}
            {/* Forgot <a href="#">password?</a> */}
          {/* </p> */}
      </form>
    </div>
    </MainLayout>
    </div>
  )
}

export default UserLoginR
