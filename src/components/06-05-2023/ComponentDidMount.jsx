import React from "react";
export default class ComponentDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    // Execute the code when the compoent will get render on dom/browser
    // useEffect(() => { }, [])
    // it is excute the code at very first render of component into the browser
componentDidMount() {
    alert("You are rendered on Broweser!!")
    // alert('Hii')
    // console.log("Will get call asa when page will get render on browser...")
    // fetch('/api/data')
    //     .then(response => response.json())
    //     .then(data => this.setState({ data : data })
    // );
    setTimeout(() => {
        var responseFromBackend = "Hello World!";
        this.setState({ data: responseFromBackend })
    }, 5000)
}
render() {
    return (
        <div>
            <p>Data - {this.state.data}</p>
        </div>
    );
}
}