// 1. Refs

// ### Task 1: Creating and Using Refs in React

// #### Task:
// 1. [ ] Create a class component named RefComponent.
// 2. [ ] Inside the component, create a ref using React.createRef().
// 3. [ ] Use the ref to store a reference to a DOM element (e.g., an input field).
// 4. [ ] Log the reference to the console.
import React, { Component } from "react";

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
      </div>
    );
  }
}

export default RefComponent;