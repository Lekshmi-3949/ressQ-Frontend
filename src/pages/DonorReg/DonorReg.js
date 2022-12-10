import React,{useState} from 'react'
import './DonorReg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
import {useNavigate} from 'react-router-dom'
function DonorReg() {
  const[fullname,setfullname]=useState('')
  const[email,setemail]=useState('')
  const[bloodtype,setbloodtype]=useState('')
  const[gender,setgender]=useState('')
  const[weight,setweight]=useState('')
  const[city,setcity]=useState('')
  const[pincode,setpincode]=useState('')
 const navigate=useNavigate()

  
  const handleLogin= async(e)=>{
    e.preventDefault()
    axiosInstance.post(`${baseUrl}/api/token/`,{
      fullname: fullname,  
      email: email,
      bloodtype: bloodtype,
      gender: gender,
      weight: weight,
      city: city,
      pincode: pincode

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
      <div className="donor_reg_main">
        
        <div className="donor_reg_heading">
           <h1>Welcome To Donate!!</h1>
       
           <a href="/" className='signup__title'>sign up and continue</a>
        </div>
       
        <div classname="donor_reg_inputs">
        <form onSubmit={handleLogin} className='' >

          <div classname='content_su'>

        <input className='su__input' type="text" value={fullname} onChange={(e)=>{setfullname(e.target.value)}} placeholder='Full name' required/>
        <input className='su__input' type="text"  value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Email' required/>
        <input className='su__input' type="text"  value={bloodtype} onChange={(e)=>{setbloodtype(e.target.value)}} placeholder='Blood type' required/>
        <input className='su__input' type="text"  value={gender} onChange={(e)=>{setgender(e.target.value)}} placeholder='Gender(M/F/O)' required/>
        <input className='su__input' type="number"  value={weight} onChange={(e)=>{setweight(e.target.value)}} placeholder='Weight' required/>
        <input className='su__input' type="text"  value={city} onChange={(e)=>{setcity(e.target.value)}} placeholder='City' required/>
        <input className='su__input' type="number"  value={pincode} onChange={(e)=>{setpincode(e.target.value)}} placeholder='Pincode' required/>
      </div>
        <button  type='submit ' onClick={handleLogin} className='donor_reg_button'>SignUp</button>
         
      </form>

          </div>
          
    
      </div>
    </MainLayout>
  )
}

export default DonorReg

