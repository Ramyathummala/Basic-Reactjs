import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pageto from './pageto'
import PageThre from './pagethre'
import PageFour from './pagrfour'

const RoutingPage = () => {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Pageto/>}/>
            <Route path='/Pagethre' element={<PageThre/>}/>
            <Route path="/Pagefour"element={<PageFour/>}/>
        </Routes>
    </BrowserRouter>
  
  )
}

export default RoutingPage