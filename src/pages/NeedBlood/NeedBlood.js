import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './NeedBlood.css'
//import { SlDrop } from 'react-icons/S1';
import Dropdown from '../../components/Dropdown/Dropdown'
import DropdownDis from '../../components/DropdownDis/DropdownDis'
import {useState,useEffect} from 'react'
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls'




const NeedBlood = () => {
  const districts=["None","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]
  const[district,setdistrict]= React.useState('')
  const [bloodgroup, setBlood] = React.useState('')
    const[data,setdata]=useState([])
    const[ogdata,setogdata]=useState([])
    const[bloodcomp,setBloodcomp]=useState([])
    useEffect(() => {axiosInstance.get(`${baseUrl}/blood-comp/`).then((Response)=>{console.log(Response)
      setBloodcomp(Response.bloodcomp)})    
    axiosInstance.get(`${baseUrl}/donors/`).then((Response)=>{console.log(Response)
     setdata(Response.data)
    setogdata(Response.data)})      },[]);

    const handleSignup=(e)=>{
      filterArray(data, district, bloodgroup) 
  //axiosInstance.get(`${baseUrl}/blood-comp/`).then((Response)=>{console.log(Response)
  //  setBloodcomp(Response.bloodcomp)})    
  //axiosInstance.get(`${baseUrl}/donors/`).then((Response)=>{console.log(Response)
  // setdata(Response.data)})
   
}
function filterArray(data, location, bloodType) {
  console.log(location)
  console.log(bloodType)
  let temp=ogdata
  if(location != undefined)
  temp = temp.filter(item => item.district == location)
  if(bloodType != undefined)
  temp = temp.filter(item =>{
    
   return item.blood_group == bloodType
  } )
  setdata(temp)
   {/* console.log(data.filter(item => {
      console.log(location,item.district)
  console.log(bloodType,item.p_blood)
    if (location == undefined) {
      return item.p_blood == bloodType;
    }

    if (bloodType == undefined) {
      return item.district== location;
    }

    return item.district== location && item.p_blood == bloodType;
  }));*/}
}
  return (
    <MainLayout>
    <div className='need_blood_container'>
      <div className="need_blood_title">
        Need Blood?
      </div>      
      <div className="need_blood_searchBox">
        <div className="need_blood_bGroups">
            <div className="need_blood_bgicon">
            {/*<SlDrop/>*/}
            </div>
            {/*<input type="" className="need_blood_bgroup" />*/}
            
            <Dropdown bloodgroup={bloodgroup} setBlood={setBlood}/>

            
            


        </div>
        <div className="need_blood_location">
            <div className="need_blood_locicon">

            </div>
            {/*
            <select value="___"  className="need_blood_loc" placeholder='Select District'>
                <option value="Ernakulam">Ekm</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Edukki">Edukki</option>
                <option value="Kannur">Kannur</option>
                <option value="Wayanad">Vayanad</option>
                <option value="Kollam">Kannur</option>
                <option value="Kozhikkode">Kozhikkode</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kasaragod">Kasaragod</option>
                <option value="Malappuram">Malappuram</option>


            </select>
             */}
            <DropdownDis district={district} setdistrict={setdistrict} districts={districts}/>
            
        </div>
        <button className='need_blood_searchbtn' onClick={()=>{filterArray(data, district, bloodgroup)}} >Button</button>
      </div>
      
      <div className="need_blood_records">
      <p>name &emsp; branch &emsp; batch &emsp; phoneno </p>
    {
        data.map((item)=>{
            return(
                <div>   
               {/* <p>{bloodcomp.p_blood}&emsp;&emsp;{bloodcomp.comp_type1}&emsp;</p>*/}
                
                <p>{item.dname}&emsp;&emsp;{item.branch}&emsp;&emsp;{item.batch}&emsp;&emsp;{item.phoneno} </p>
                </div> 
            )
        })
      }
  
   
      
      </div>





        
    </div>
    </MainLayout>
  )
}

export default NeedBlood



