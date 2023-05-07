import React from "react";


export default class PracticeRegistrationClass extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        // console.log(event.target.value,event.target.name)
        const { name, value } = event.target;
        console.log(value, name)
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.password) {
            // Call backend api her and pass the state 
            alert("Submitted data. Now go for login...")
        } else {
            alert("Please fill the all details..")
        }
    }
    render() {
        return (
            <>
                <h1>Registration :{this.state.name}</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Name :</label><br />
                    <input name="name" type="text" onChange={this.handleChange} /><br />
                    <label>Email :</label><br />
                    <input name='email' type="email" onChange={this.handleChange} /><br />
                    <label>Password :</label><br />
                    <input name='password' type="password" onChange={this.handleChange} /><br />
                    <input type="submit" /><br />
                </form>
            </>
        )
    }
}