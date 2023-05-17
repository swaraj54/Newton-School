
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
function Loader() {
    //  1min  Step 1 : Make http request to server("fakestoreapi") by using fetch()
    // Step 2 : Convert that data by parse.json().
    //     Step 3 : Store that data into state of Component.
    //         Step 4 : Show the data into return statememt..

    // Till we are getting the data from fakeStore api show user Loading,
    //     And once we got the data dont show Loading...

    const [data, setData] = useState(null);
    const [flagForLoading, setFlagForLoading] = useState(true);
    // console.log(data, "hrere")
    useEffect(() => {
        async function callBackend() {
            try {
                // get
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                // console.log(data, "here is the data")
                setData(data)
                setFlagForLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        callBackend();
    }, [])
    if (flagForLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <h1>Loader</h1>
            <h3>{data && data.map((e) => (
                <div key={e.id}>
                    <h1>Title : {e.title}</h1>
                </div>
            ))}</h3>

        </div>
    );
}
export default Loader