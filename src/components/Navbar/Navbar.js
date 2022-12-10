import React from 'react'
import './Navbar.css'
import { Link } from "react-scroll";


import R_logo from '../../assets/r_logo.svg'
import About from '../About/About'
import Landing from '../Landing/Landing'
import Drives from '../Drives/Drives'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='Navbar_container'>

        <div className='Navbar_logo'>
            <img src={R_logo} alt='RessQ Logo' className='R_logo'/>
        </div>

        <div className='Navbar_items'>
        <Link to="landing" spy={true} activeClass="active" smooth={true} offset={0} duration={500} className='Navbar_item'>
          Home
        </Link>

        <Link to="about" spy={true} activeClass="active" smooth={true} offset={0} duration={500} className='Navbar_item'>
          About
        </Link>

        <Link to="drives" spy={true} activeClass="active" smooth={true} offset={0} duration={500} className='Navbar_item'>
          Drives
        </Link>
         

           { /*<div className='Navbar_item'><a href='#landing' spy={true} activeClass="navbar_item_active" smooth={true} offset={0} duration={5000}>Home</a></div>
            <div className='Navbar_item'><a href='#about' spy={true} activeClass="navbar_item_active" smooth={true} offset={0} duration={5000}>About</a></div>
            <div className='Navbar_item'><a href='#drives' spy={true} activeClass="navbar_item_active" smooth={true} offset={0} duration={5000}>Drives</a></div>
        */}

           

        </div>

        <div className='Navbar_auth'>
            <div className='Navbar_auth_login'>
                <button onClick={()=>{navigate('/user-loginr')}}>Login</button>
            </div>

            <div className='Navbar_auth_signup'>
                <button onClick={()=>{navigate('/user-login')}}>Signup</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar
