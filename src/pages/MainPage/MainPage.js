import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import About from '../../components/About/About'
import Landing from '../../components/Landing/Landing'
import Drives from '../../components/Drives/Drives'
const MainPage = () => {
  return (
    <div>
      <MainLayout>
         <Landing/>
         <About/>
         <Drives/>
         
      </MainLayout>
    </div>
  )
}

export default MainPage