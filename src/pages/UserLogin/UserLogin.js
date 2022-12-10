import React,{useState} from 'react'
import './UserLogin.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
import {useNavigate} from 'react-router-dom'
const UserLogin = () => {
  const[uname,setuname]=useState('')
  const[email,setemail]=useState('')
  const[password,setPassword]=useState('')
 const navigate=useNavigate()


  const handleLogin= async(e)=>{
    e.preventDefault()
    axiosInstance.post(`${baseUrl}/api/token/`,{
      uname : uname,
        email: email,
        password : password
    }).then((res)=>{
        console.log(res)
        localStorage.setItem('access_token',res.data.access);
        localStorage.setItem('refresh_token',res.data.refresh);
        axiosInstance.defaults.headers['Authorization']= 'Bearer ' + localStorage.getItem('access_token');
        if(res.status===200)
        
        navigate('/')
    },(error)=>{
        console.log(error)
    })

}
  return (
    <MainLayout>
    <div className='login__form_main'>
      <div className="login_form__container" >
      <form onSubmit={handleLogin} className='login__form' >
        <p className='login__header'>Login</p>
        <input className='login__input' type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder='user name' required/>
        <input className='login__input' type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email id' required/>
        <input className='login__input' type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' required/>
        
        <button  type='submit ' className='login__button'>SignUp</button>
         <div><p>Already have an account?</p><a href="/" className='signin'>sign in</a></div>
      </form>
      </div>
    </div>
    </MainLayout>
  )
}

export default UserLogin
