import React from 'react';
import {Link} from 'react-router-dom';
import "./nav.css"

 const Navbar = () => {
  return (
    <div>
      
        <nav className='nav_link'>
            <ul className='ul-link'>
            <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/About">About</Link>
         </li>
         <li>
           <Link to="/Contact">Contact</Link>
         </li>
            </ul>
        </nav> 
         {/* <Navbar></Navbar> */}
    </div>
  )
};
export default Navbar;
