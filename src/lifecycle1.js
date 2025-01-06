// 2. Component Life Cycle

// ### Task 1: Lifecycle Methods in Class Components

// #### Task:
// 1. [ ] Create a class component named LifecycleComponent.
// 2. [ ] Implement the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.
// 3. [ ] Use console.log to log messages indicating when each method is called.
import React, { Component } from "react";

class LifecycleComponent extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return <div>Hello World!</div>;
  }
}
export default LifecycleComponent;