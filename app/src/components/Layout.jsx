import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
