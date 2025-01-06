// ### Task 2: Component Creation, Mounting, Updating, and Unmounting Phases

// #### Task:
// 1. [ ] Inside LifecycleComponent, add rendering logic to display content based on component phases (e.g., creation, mounting, updating).
// 2. [ ] Update the rendering logic to display different content during the unmounting phase.

// import React from "react";

// class LifecycleComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       phase: "creation",
//     };
//   }
//   componentDidMount() {
//     this.setState({ phase: "mounting" });
//   }
//   componentDidUpdate() {
//     this.setState({ phase: "updating" });
//   }
//   componentWillUnmount() {
//     this.setState({ phase: "unmounting" });
//   }
//   render() {
//     return <div>{this.state.phase}</div>;
//   }
// }
// export default LifecycleComponent;
import React, { Component } from "react";

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "creation",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ phase: "mounting" });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount ");
  }

  render() {
    const { phase } = this.state;

    let content;
    switch (phase) {
      case "creation":
        content = <div>Component is in the creation phase.</div>;
        break;
      case "mounting":
        content = <div>Component is in the mounting phase.</div>;
        break;
      default:
        content = <div>Component is in the updating phase.</div>;
        break;
    }

    return <div>{content}</div>;
  }
}

export default LifecycleComponent;