import React,{useState,useEffect} from 'react'
import './DonorReg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
function DonorReg() {
  const[userid,setuserid]=useState(0)
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

  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
     console.log(response)
      setuserid(response.data.id)
    }, (error)=>{console.log(error)})
  },[])
  
 const navigate=useNavigate()
 
  const districts=["Enter District","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]
  const diseases=["Any Disease","Yes","No"]

  const allergies=["Any Allergy","Yes","No"]
  const cardiacs=["Cardiac Patient","Yes","No"]
  const bleedings=["Bleeding Disorder","Yes","No"]
  const hivp=["HIV Patient","Yes","No"]
  const hepatitisp=["Hepatitis Patient","Yes","No"]
  const genderc=["gender","Female","Male","Other"]
  const branches=["branch","CSA","CSB","ECA","ECB","EEE","EB","MECH"]
  const batchs=["batch","2023","2024","2025","2026",]
   


  
  const handleDonorReg= async(e)=>{
    e.preventDefault()
    // if(weight<50){}
    axiosInstance.post(`${baseUrl}/donors-register/`, {
      dname: fullname,  
      phoneno: phonenumber,
      blood_group: bloodtype,
      dob : dob,
      gender: gender,
      weight: weight,
      branch : branch,
      batch : batch,
      district: district,
      last_donated_date: lastdonated,
      diseases : disease,
      allergies : allergy,
      cardiac : cardiac,
      bleeding_disorders : bleeding,
      hiv : hiv,
      hepatitis : hepatitis,
      user_foreign: userid


      

    }).then((res)=>{
      console.log(res)
        // console.log(res)
        // localStorage.setItem('access_token',res);
        // localStorage.setItem('refresh_token',res.data.refresh);
        // axiosInstance.defaults.headers['Authorization']= 'Bearer ' + localStorage.getItem('access_token');
        // if(res.status===200)
        
        // navigate('/')
    },(error)=>{
        console.log(error)
    })

}
  return (
    <MainLayout>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
      <div className="donor_reg_main">
        
        <div className="donor_reg_heading">
           <h1>Welcome To Donate!!</h1>
       
           <a href="/" className='signup__title'>sign up and continue</a>
        </div>
       
        <div className='donor_reg_inputs'>
        <form onSubmit={handleDonorReg} className='' >

          <div className='content_su'>

        <input className='su__input' type="text" value={fullname} onChange={(e)=>{setfullname(e.target.value)}} placeholder='Full name' required/> 
       <input className='su__input' type="number"  value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}} placeholder='Phone Number' required/>
       <input className='su__input' type="text"  value={bloodtype} onChange={(e)=>{setbloodtype(e.target.value)}} placeholder='Blood type' required/>
        <input className='su__input' type="date"  value={dob} onChange={(e)=>{setdob(e.target.value)}} placeholder='Date-Of-Birth' required/>
        {/* <input className='su__input' type="text"  value={gender} onChange={(e)=>{setgender(e.target.value)}} placeholder='Gender(M/F/O)' required/> */}
        <select className='su__input'  value={gender} onChange={(e)=>{setgender(e.target.value)}} id="gender" name="fmo">
        {

          genderc.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        <input className='su__input' type="number"  value={weight} onChange={(e)=>{setweight(e.target.value)}} placeholder='Weight' required/>
        {/* <input className='su__input' type="text"  value={branch} onChange={(e)=>{setbranch(e.target.value)}} placeholder='Class' required/> */}
        <select className='su__input'  value={branch} onChange={(e)=>{setbranch(e.target.value)}} id="branch" name="branch">
        {

          branches.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        {/* <input className='su__input' type="text"  value={batch} onChange={(e)=>{setbatch(e.target.value)}} placeholder='Batch' required/> */}
        <select className='su__input'  value={batch} onChange={(e)=>{setbatch(e.target.value)}} id="batch" name="batch">
        {

          batchs.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        {/* <label >Enter District</label> */}
        <select className='su__input'  value={district} onChange={(e)=>{setdistrict(e.target.value)}} id="districts" name="di">
        {

          districts.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        <input className='su__input' type="date"  value={lastdonated} onChange={(e)=>{setlastdonated(e.target.value)}} placeholder='LastDonated' required/>
        {/* <input className='su__input' type="text"  value={disease} onChange={(e)=>{setdisease(e.target.value)}} placeholder='Any Disease' required/> */}
        <select className='su__input'  value={disease} onChange={(e)=>{setdisease(e.target.value)}} id="disease" name="dis">
        {

          diseases.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        {/* <input className='su__input' type="text"  value={allergy} onChange={(e)=>{setallergy(e.target.value)}} placeholder='Any Allergy' required/> */}
        <select className='su__input'  value={allergy} onChange={(e)=>{setallergy(e.target.value)}} id="allergy" name="dis">
        {

          allergies.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        {/* <input className='su__input' type="text"  value={cardiac} onChange={(e)=>{setcardiac(e.target.value)}} placeholder='Cardiac ?' required/> */}
        <select className='su__input'  value={cardiac} onChange={(e)=>{setcardiac(e.target.value)}} id="cardiac" name="cardiac">
        {

          cardiacs.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        
        {/* <input className='su__input' type="text"  value={bleeding} onChange={(e)=>{setbleeding(e.target.value)}} placeholder='Bleeding ?' required/> */}
        <select className='su__input'  value={bleeding} onChange={(e)=>{setbleeding(e.target.value)}} id="bleeding" name="bleed">
        {

         bleedings.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        {/* <input className='su__input' type="text"  value={hiv} onChange={(e)=>{sethiv(e.target.value)}} placeholder='HIV ?' required/> */}
        <select className='su__input'  value={hiv} onChange={(e)=>{sethiv(e.target.value)}} id="hiv" name="hiv">
        {

          hivp.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
        {/* <input className='su__input' type="text"  value={hepatitis} onChange={(e)=>{sethepatitis(e.target.value)}} placeholder='Hepatitis ?' required/> */}
        <select className='su__input'  value={hepatitis} onChange={(e)=>{sethepatitis(e.target.value)}} id="hepatitis" name="hpt">
        {

          hepatitisp.map((item,index)=>{
              return(<option value={item} key={index}>{item} </option>)
          })
        } </select>
      </div>
        <button  type='submit '  className='donor_reg_button'>SignUp</button>
         
      </form>

          </div>
          
    
      </div>
    </MainLayout>
  )
}

export default DonorReg

