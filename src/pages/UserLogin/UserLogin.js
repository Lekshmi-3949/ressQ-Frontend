import React from 'react'
import './UserLogin.css'
import MainLayout from '../../components/MainLayout/MainLayout'
const UserLogin = () => {
  return (
    <MainLayout>
    <>
      <div className='userlogin__main'> 
       <div classname='userlogin_form_container' style={{backgroundColor:'#D9D9D9'}}>
       <div classname='login-box'> 
        <div classname='login'>
          <p>Login</p>
          </div>
        
      <form action="">
        <div classname="user-box1">
              <input type="text" name="username" required="" placeholder='username'/>
             {/* <label>Username</label> */}
          </div>

        <div classname="user-box2">
            <input type="password" name="" required="" placeholder='password'/>
            {/* <label>Password</label> */}
        </div>

        <div classname="user-box3">
      <input type="phone" name="" required="" placeholder='phone'/>
      {/* <label>Phone</label> */}
    </div>
      <div classname='frame'>
    <button classname='sign-button'>SignUp</button>
    </div>
        </form>
        </div>
       </div>
         
        </div>
    </>
    
    </MainLayout>
  )
}

export default UserLogin