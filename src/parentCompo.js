import React from "react";
import Header from './header';
import Footer from './footer';
import Maincontent from './maincontent';

function ParentCompo(){  
        const Myftn=(agr)=>{
            console.log(agr)
        }
  
    return(
        <>
            <h1>Parent components:</h1>
            <Header props="passing value child " track={Myftn} />
            <Footer props={123} />
            <Maincontent />
        
        </>
    )
};
export default ParentCompo;