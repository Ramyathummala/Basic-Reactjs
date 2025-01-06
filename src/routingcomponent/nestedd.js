import React from 'react'
import{Routes,Route, BrowserRouter}  from 'react-router-dom';
import Homee from './Homee'
import Aboutt from './Aboutt'
import Projectt from './Projectt'
import Featurepro from './featurepro';
import Newproject from './newproject';



const Nestedd = () => {
  return (
    <div>
     
       <BrowserRouter>
       <Routes>
            <Route path='/'element={<Homee/>}/>
            <Route path='/Aboutt' element={<Aboutt/>}/>
           <Route path='/Projectt'element={<Projectt/>}>
                <Route path='Featurepro' element={<Featurepro/>}/>
                <Route path='Newproject' element={<Newproject/>}/>
           </Route>
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default Nestedd