import React from 'react'
import './MainLayout.css'
import Navbar from '../Navbar/Navbar'

const MainLayout = ({children}) => {
  return (
    <div classname='main_layout'>
      <Navbar/>
      
      {children}
    </div>
  )
}

export default MainLayout
