import React from 'react'

export default class GetRequestClass extends React.Component {

    constructor() {
        super()
        this.state = null;
    }

    componentDidMount() {
        async function callApi() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Network error...")
                }
                const data = await response.json();
                if (data) {
                    this.setState(data);
                    alert("Got the data")
                } else (
                    alert("Data not found...")
                )
            } catch (error) {
                console.log(error)
            }
        }
        callApi()
    }

    render() {
        return (
            <div>
                Hiii
            </div>
        )
    }


}