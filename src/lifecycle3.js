// ### Task 3: Side Effects in Lifecycle Methods

// #### Task:
// 1. [ ] Extend LifecycleComponent to include a side effect, such as fetching data, inside the componentDidMount or componentDidUpdate method.
// 2. [ ] Log the results of the side effect or update the component state accordingly.
import React, { Component } from "react";

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        // Logging the fetched data
        console.log("Fetched data:", data);
        // Updating component state with fetched data
        this.setState({ data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if state or props have changed
    if (this.props.someProp !== prevProps.someProp) {
      // Simulating another fetch request
      fetch("https://jsonplaceholder.typicode.com/posts/2")
        .then((response) => response.json())
        .then((data) => {
          console.log("Updated fetched data:", data);
          this.setState({ data });
        })
        .catch((error) => {
          console.error("Error fetching updated data:", error);
        });
    }
  }

  componentWillUnmount() {
    // Perform cleanup if necessary
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2>Component Data:</h2>
        {data ? (
          <div>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
}

export default LifecycleComponent;