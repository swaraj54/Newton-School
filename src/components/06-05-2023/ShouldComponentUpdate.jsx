import React from "react";
export default class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    // useEffect(()=> {},[state])shouldComponentUpdate will not update it will not invokw on very first render
    // useEffect(() => { }, [stateVarible])
    // useEfect will execute the code at first render and when stateVarible is changes

    // shouldComponentUpdate only excutes the code when passed state changes
    // it will not execute the code on very first render ...
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.count !== this.state.count, "INSIDE should Component Update")
        return nextState.count !== this.state.count;
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}