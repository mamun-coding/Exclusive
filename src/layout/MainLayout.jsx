
import React from 'react'
import TopBar from '../componets/TopBar'
import { Outlet } from 'react-router'
import NavBar from '../componets/NavBar'
import Footer from '../componets/Footer'

const MainLayout = () => {
  return (
     <main>
        <TopBar/>
        <NavBar/>
        <Outlet/>
        <Footer/>
     </main>
  )
}

export default MainLayout
