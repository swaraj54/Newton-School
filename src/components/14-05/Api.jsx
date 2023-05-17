import React, { useEffect, useState } from 'react'
const Api = () => {

    const [fetchedData, setFetchedData] = useState(null);
    // console.log(fetchedData, "- fetchedData")
    useEffect(() => {
        // alert("Hello")
        async function callServer() {
            // alert("Hello")
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                // console.log(response, "- reponse here")
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log(data, "data heree")
                if (data) {
                    setFetchedData(data)
                } else {
                    alert("Data Not found...")
                }

            } catch (error) {
                console.log(error, "error")
            }
        }
        console.log("Outside of function...")
        callServer()
    }, [])
    return (
        <div>
            <h1>Api data :</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
                {fetchedData && fetchedData.map((e) => (
                    <div key={e.id} style={{ width: '20%', border: "3px solid black" }}>
                        <h2>Name : {e.title}</h2>
                        <h2>Price : {e.price}</h2>
                        <h2>Description : {e.description}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Api