import React from 'react';
import {Link} from 'react-router-dom';
// import "./nav.css"

 const PageOne = () => {
  return (
    <div>
      
        <nav className='nav_link'>
            <ul className='ul-link'>
            <li>
           <Link to="/">Pageto</Link>
         </li>
         <li>
           <Link to="/PageThre">PageThre</Link>
         </li>
         <li>
           <Link to="/PageFour">PageFour</Link>
         </li>
            </ul>
        </nav> 
         {/* <Navbar></Navbar> */}
    </div>
  )
};
export default PageOne;
