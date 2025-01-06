import React from "react";
import './external.css'

function CssCompo(){

const style={
    color:"grey",
    fontstyle:"italic"
}
    return(
        <div className="css_external">
            {/* <h1 style={{color:"red",fontSize:"20px", padding:"30px"}}>Using CSS in React Components </h1> */}

            <h2>External CSS File</h2>
            <p style={style}>Using CSS in React Components</p>
        </div>
    )
};
export default CssCompo;