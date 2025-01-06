import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={sayings:" "}
    }
    update(e){
        this.setState({sayings:e.target.value});
    }
    render() {
        return (
            <div>
                ramya says{""}
                <input type='text' onChange={this.update.bind(this)}/><br/>
                <h4>{this.state.sayings}</h4>
            </div>
        )
    }
}
export default MyComponent;