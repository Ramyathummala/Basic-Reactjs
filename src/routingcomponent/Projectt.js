import React from 'react'
import NestedNav from './NestedNav';
import { Link ,Outlet} from 'react-router-dom';

const Projectt = () => {
  return (
    <div>
        <NestedNav/>
        <h1>Projectt</h1> 
      
            <nav>
                <Link to='/Projectt/Featurepro'>Featurepro</Link>
                <Link to='/Projectt/Newproject'>Newproject</Link>
                <Outlet/>
            </nav>
        </div>
  )
}

export default Projectt;