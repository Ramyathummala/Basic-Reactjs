// ### Task 4: Forwarding Refs to Child Components

// #### Task:
// 1. [ ] Create a child component named ChildComponent.
// 2. [ ] Inside ChildComponent, use the React.forwardRef function to forward the ref to a specific DOM element or another child component.
// 3. [ ] Use the forwarded ref in the parent component (FunctionalRefComponent or RefComponent).
// 4. [ ] Log the reference to the console to ensure forwarding is successful.
import React, { forwardRef } from "react";

// Step 1: Create a child component named ChildComponent
const ChildComponent = forwardRef((props, ref) => {
  return <div ref={ref}>Hello World</div>;
});

export default ChildComponent;