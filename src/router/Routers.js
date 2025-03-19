import React from 'react'

import Home from './../pages/Home'
import Tours from './../pages/Cars'
import TourDetails from './../pages/CarDetails'

import SearchResultList from './../pages/SearchResultList'
import Register from './../pages/Register'
import Login from './../pages/Login'
import {Routes, Route, Navigate} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
    </Routes>
  )
}

export default Routers