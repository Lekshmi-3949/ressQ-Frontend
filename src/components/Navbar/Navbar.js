import React from 'react'
import './Navbar.css'
import R_logo from '../../assets/r_logo.svg'

const Navbar = () => {
  return (
    <div className='Navbar_container'>

        <div className='Navbar_logo'>
            <img src={R_logo} alt='RessQ Logo' className='R_logo'/>
        </div>

        <div className='Navbar_items'>
            <div>Home</div>
            <div>Drives</div>
            <div>About</div>
            <div>Contact Us</div>
        </div>

        <div className='Navbar_auth'>
            <div className='Navbar_auth_login'>
                <button>Login</button>
            </div>

            <div className='Navbar_auth_signup'>
                <button>Signup</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar
