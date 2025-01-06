// ### Task 4: Replacing Lifecycle Methods with the useEffect Hook

// #### Task:
// 1. [ ] Create a functional component named EffectComponent.
// 2. [ ] Use the useEffect hook to replace the functionality of the lifecycle methods in LifecycleComponent.
// 3. [ ] Migrate the side effect and cleanup logic to the useEffect hook.
// import React, { useEffect } from "react";

import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component is mounted");
    return () => {};
  }, []);

  useEffect(() => {
    console.log("Component is updated");

    return () => {
      console.log("Cleanup for componentDidUpdate");
    };
  }, [count]);

  useEffect(() => {
    console.log("Effect for componentWillUnmount");
    return () => {
      console.log("Cleanup for componentWillUnmount");
    };
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default EffectComponent;