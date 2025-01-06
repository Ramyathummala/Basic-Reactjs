import React, { useState } from "react";

function Compoevents(){
        const [value, setvalue]=useState('');
    // const Btnclick=()=>{
    //     console.log('onclickevents!')
    // }
    const handleChange=(e)=>{
        setvalue(e.target.value);
        console.log(e.target.value)
    }
    return(
        <>

        {/* <button onClick={Btnclick}>Click me</button> */}
        <input type="text" value={value} onChange={handleChange}/>
        </>
    )
};
export default Compoevents;