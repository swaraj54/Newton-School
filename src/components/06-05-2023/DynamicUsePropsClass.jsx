import React from "react";
export default class DynamicUsePropsClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount };
    }
    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count} </p>
                <button onClick={() => this.handleClick()}>Click me!</button>
            </div>
        );
    }
}