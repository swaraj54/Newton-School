import React from "react";


export default class PropsClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h4>Journey of {this.props.age} Years !</h4>
            </div>
        )
    }
}

