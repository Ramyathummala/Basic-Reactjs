import React from "react";


function Header({props,track}){
    track("Ramya");
    return(
      <>
            <h1>Components:{props}</h1>
      </>
    )
};
export default Header;