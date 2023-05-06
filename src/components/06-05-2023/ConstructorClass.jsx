import React from "react";

// Mouting Phase
export default class ConstructorClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        );
    }
}