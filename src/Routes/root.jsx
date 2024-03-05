import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../Component/Footer';

function root() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default root