import React, { useState } from "react";


function Greeting(){
    const [count,setcount]=useState(0)
   return(
    <>
        <h2>Sample Greeting:{count}</h2>
        <button onClick={()=>setcount(count+1)}>incre</button>
        <button onClick={()=>setcount(count-1)}>decre</button>
       
    </>
   )
};
export default Greeting;