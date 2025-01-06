
import React from 'react'
class ForwardRefff extends React.Component {
    constructor(props) {
      super(props)
      this.aRef = React.createRef()
    }
    render() {
      return (
        <>
          <Counter ref={this.aRef} />
          <button onClick={() => { console.log(this.aRef) }}>
           Ref
          </button>
        </>
      )
    }
  }
   
  const Counter = React.forwardRef((props, ref) => {
    class Counter extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
      }
      render() {
        return (
          <div>
            Count: {this.state.count}
            <button ref={ref} onClick={() => this.setState(
              { count: this.state.count + 1 })}>
                    Increment
            </button>
          </div>
        )
      }
    }
    return <Counter />
  })
   
  export default ForwardRefff
 