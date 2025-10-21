import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footerr from '../footer/Footerr'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footerr/>
    </>
  )
}
