// ### Task 2: Refs for DOM Manipulation

// #### Task:
// 1. [ ] Extend RefComponent to include a method that uses the ref to manipulate the DOM (e.g., focus on the input field).
// 2. [ ] Trigger the method at a specific point (e.g., when a button is clicked).
// 3. [ ] Observe the DOM manipulation.
import React, { Component } from "react";

class ReffffComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
  }

  // Step 1: Extend RefComponent to include a method that uses the ref to manipulate the DOM
  focusInput = () => {
    if (this.myRef.current) {
      this.myRef.current.focus();
    }
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default ReffffComponent;