import React, { useRef } from "react";
import ChildComponent from "./Reftask4"; // Assuming ChildComponent is in a separate file

const FunctionalRefComponenttt = () => {
  const myRef = useRef(null);

  console.log(myRef.current);

  return (
    <div>
      {/* Step 3: Use the forwarded ref in the parent component */}
      <ChildComponent ref={myRef} />
    </div>
  );
};

export default FunctionalRefComponenttt;