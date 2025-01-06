import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './contact';
import Home from './home';
import About from './about';

function RoutingCompo() {
  return (
    <BrowserRouter>
    <div>
        Hello Browser
    </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path="/Contact"element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  
  )
}

export default RoutingCompo;