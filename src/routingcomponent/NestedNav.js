import React from 'react'
import { Link } from 'react-router-dom';
import './nestedrout.css';

const NestedNav = () => {
  return (
    <div className='container'>
        <nav className='navbarrrr'>
           <div >
           <Link to='/'>Homee</Link>
            <Link to='/Aboutt'>Aboutt</Link>
            <Link to='/Projectt'>Projectt</Link>
           </div>
        </nav>
    </div>
  )
}

export default NestedNav
