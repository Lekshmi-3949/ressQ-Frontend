import React from 'react'
import './DonorReg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
function DonorReg() {
  return (
    <MainLayout>
      <div className="donor_reg_main">
        
        <div className="donor_reg_heading">
           <p>Welcome To Donate!!</p>
       
           <a href="/">sign up and continue</a>
        </div>
        <div classname="donor_reg_inputs">
          </div>
        <button classname='donor_reg_button'> Signup </button>
       
      </div>
    </MainLayout>
  )
}

export default DonorReg

