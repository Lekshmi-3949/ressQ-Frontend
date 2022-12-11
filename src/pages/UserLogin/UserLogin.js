import React,{useState} from 'react'
import './UserLogin.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import baseUrl from '../../utils/Urls'

import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const UserLogin = () => {
  const[uname,setuname]=useState('')
  const[email,setemail]=useState('')
  const[password,setPassword]=useState('')
 const navigate=useNavigate()


  const handleSignup=(e)=>{
    e.preventDefault();
    axios.post(`${baseUrl}/register/`,{
      user_name:uname,
      email:email,
      password:password,

      }).then((response)=>{
      console.log(response)}
      )
  }
  return (
    <MainLayout>
    <div className='login__form_main'>
      <div className="login_form__container" >
      <form onSubmit={handleSignup} className='login__form' >
        <p className='login__header'>SignUp</p>
        <input className='login__input' type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder='user name' required/>
        <input className='login__input' type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email id' required/>
        <input className='login__input' type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' required/>
        
        <button  type='submit ' className='login__button'>SignUp</button>
         <div className='login__signin'><p>Already have an account?</p><a href="/" className='signin'>sign in</a></div>
      </form>
      </div>
    </div>
    </MainLayout>
  )
}

export default UserLogin
