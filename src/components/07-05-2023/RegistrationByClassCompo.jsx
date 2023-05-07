import React from "react";

export default class RegistrationByClassCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: 'knjhbgvfcdf',
            confirmPassword: 'knjhbgvgfycdsx'
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Handle form submission here
        // Call backend but after some check ( chcek password and comfinmpass are same are not )
        console.log('Submitting form', this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}