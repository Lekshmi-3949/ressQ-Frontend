import React,{useState} from 'react'
import './UserLoginR.css'
import MainLayout from '../../components/MainLayout/MainLayout'

import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
import {useNavigate} from 'react-router-dom'
const UserLoginR = () => {
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
 const navigate=useNavigate()

 const handleLogin= async(e)=>{
  e.preventDefault()
        axiosInstance.post(`${baseUrl}/api/token/`,{
            "email": email,
            "password" : password
        }).then((res)=>{
            console.log(res)
            // localStorage.setItem('access_token',res.data.access);
            // localStorage.setItem('refresh_token',res.data.refresh);
            // axiosInstance.defaults.headers['Authorization']= 'Bearer ' + localStorage.getItem('access_token');
            // axiosInstance.defaults.headers['Content-Type']= 'application/json';
            if(res.status===200)
            
            navigate('/')
        },(error)=>{
            console.log(error)
        })
}

  return (
    <div>
       <MainLayout>
    <div className='loginR__form_main'>
      <div className="loginR_form__container"></div>
      <form action="" onSubmit={handleLogin} className='loginR__form'>
        <p className='loginR__header'>Login</p>
        <input className='loginR__input' type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}placeholder='Email Id' required/>
      
        <input className='loginR__input' type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' required />
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
