import React from 'react'
import './DonorReg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
function DonorReg() {
  return (
    <MainLayout>
      <div className="donor_reg_main">
        
        <div className="donor_reg_heading">
           <h1>Welcome To Donate!!</h1>
       
           <a href="/">sign up and continue</a>
        </div>
        <div classname="donor_reg_inputs">
         <form action="">
            <div classname="input">
              <input type="text" name="full-name"  placeholder='Fullname' required=""/>
             {/* <label>Fullname</label> */}
          </div>
          
        <div classname="input">
              <input type="text" name="email-address" placeholder='Email address' required=""/>
             {/* <label>Emailaddress</label> */}
          </div>
          
        <div classname="input">
              <input type="text" name="blood-type" placeholder='Blood type' required=""/>
             {/* <label>Bloodtype</label> */}
          </div>
          
        <div classname="input">
              <input type="text" name="gender" placeholder='Gender' required=""/>
             {/* <label>Gender</label> */}
          </div>
          
        <div classname="input">
              <input type="text" name="weight" placeholder='Weight' required=""/>
             {/* <label>Weight</label> */}
          </div>
         
        <div classname="input">
              <input type="text" name="city" placeholder='City' required=""/>
             {/* <label>City</label>  */}
          </div>
          
        <div classname="input">
              <input type="text" name="pin-code" placeholder='Pin code' required=""/>
             {/* <label>Pincode</label> */}
          </div>
          </form>
          </div>
        <button classname='donor_reg_button'> Signup </button>
       
      </div>
    </MainLayout>
  )
}

export default DonorReg

