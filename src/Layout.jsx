import React from 'react'
// import { RouterProvider } from 'react-router-dom'
 import Header from './components/Header/Footer/Header'
 import Footer from './components/Header/Footer/Footer'
  import { Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
function Layout() {
  return (  
    <>
<Header/>
<Outlet/>
<Footer/>
<Home/>
</>   
  )
}

export default Layout