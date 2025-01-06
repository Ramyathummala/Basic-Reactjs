// ### Task 3: Refs with Functional Components using the useRef Hook

// #### Task:
// 1. [ ] Create a functional component named FunctionalRefComponent.
// 2. [ ] Inside the component, use the useRef hook to create a ref.
// 3. [ ] Use the ref to store a reference to a DOM element similar to the class component.
// 4. [ ] Log the reference to the console.
import React from "react";
import { useRef } from "react";
const FunctionalRefComponent = () => {
  const ref = useRef(null);
  console.log(ref);

  return <div ref={ref}>Hello World</div>;
};
export default FunctionalRefComponent;