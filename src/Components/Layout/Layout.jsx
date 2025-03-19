import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import "./Layout.css"

const Layout = () => {
  return (
    <div id='layout'>
    <Header/>
    <Routers/>
    <Footer/>
    
    </div>
    
  )
}

export default Layout