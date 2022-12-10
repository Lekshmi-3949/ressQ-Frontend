import React,{useState} from 'react'
import './DonorReg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
import {useNavigate} from 'react-router-dom'
function DonorReg() {
  const[fullname,setfullname]=useState('')
  const[phonenumber,setphonenumber]=useState('')
  const[bloodtype,setbloodtype]=useState('')
  const[dob,setdob]=useState('')
  const[gender,setgender]=useState('')
  const[weight,setweight]=useState('')
  const[branch,setbranch]=useState('')
  const[batch,setbatch]=useState('')
  const[district,setdistrict]=useState('')
  const[lastdonated,setlastdonated]=useState('')
  const[disease,setdisease]=useState('')
  const[allergy,setallergy]=useState('')
  const[cardiac,setcardiac]=useState('')
  const[bleeding,setbleeding]=useState('')
  const[hiv,sethiv]=useState('')
  const[hepatitis,sethepatitis]=useState('')

 const navigate=useNavigate()

  const districts=["Enter District","Ernakulam","Palakkad"]
  const handleLogin= async(e)=>{
    e.preventDefault()
    axiosInstance.post(`${baseUrl}/api/token/`,{
      fullname: fullname,  
      phonenumber: phonenumber,
      bloodtype: bloodtype,
      dob : dob,
      gender: gender,
      weight: weight,
      branch : branch,
      batch : batch,
      district: district,
      lastdonated: lastdonated,
      disease : disease,
      allergy : allergy,
      cardiac : cardiac,
      bleeding : bleeding,
      hiv : hiv,
      hepatitis : hepatitis


      

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
       
        <div className='donor_reg_inputs'>
        <form onSubmit={handleLogin} className='' >

          <div className='content_su'>

        <input className='su__input' type="text" value={fullname} onChange={(e)=>{setfullname(e.target.value)}} placeholder='Full name' required/> 
       <input className='su__input' type="number"  value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}} placeholder='Phone Number' required/>
       <input className='su__input' type="text"  value={bloodtype} onChange={(e)=>{setbloodtype(e.target.value)}} placeholder='Blood type' required/>
        <input className='su__input' type="date"  value={dob} onChange={(e)=>{setdob(e.target.value)}} placeholder='Date-Of-Birth' required/>
        <input className='su__input' type="text"  value={gender} onChange={(e)=>{setgender(e.target.value)}} placeholder='Gender(M/F/O)' required/>
        <input className='su__input' type="number"  value={weight} onChange={(e)=>{setweight(e.target.value)}} placeholder='Weight' required/>
        <input className='su__input' type="text"  value={branch} onChange={(e)=>{setbranch(e.target.value)}} placeholder='Class' required/>
        <input className='su__input' type="text"  value={batch} onChange={(e)=>{setbatch(e.target.value)}} placeholder='Batch' required/>
        {/* <label >Enter District</label> */}
        <select className='su__input'  value={district} onChange={(e)=>{setdistrict(e.target.value)}} id="districts" name="di">
        {

          districts.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        <input className='su__input' type="month"  value={lastdonated} onChange={(e)=>{setlastdonated(e.target.value)}} placeholder='LastDonated' required/>
        <input className='su__input' type="text"  value={disease} onChange={(e)=>{setdisease(e.target.value)}} placeholder='Any Disease' required/>
        <input className='su__input' type="text"  value={allergy} onChange={(e)=>{setallergy(e.target.value)}} placeholder='Any Allergy' required/>
        <input className='su__input' type="text"  value={cardiac} onChange={(e)=>{setcardiac(e.target.value)}} placeholder='Cardiac ?' required/>
        <input className='su__input' type="text"  value={bleeding} onChange={(e)=>{setbleeding(e.target.value)}} placeholder='Bleeding ?' required/>
        <input className='su__input' type="text"  value={hiv} onChange={(e)=>{sethiv(e.target.value)}} placeholder='HIV ?' required/>
        <input className='su__input' type="text"  value={hepatitis} onChange={(e)=>{sethepatitis(e.target.value)}} placeholder='Hepatitis ?' required/>
      </div>
        <button  type='submit ' onClick={handleLogin} className='donor_reg_button'>SignUp</button>
         
      </form>

          </div>
          
    
      </div>
    </MainLayout>
  )
}

export default DonorReg

