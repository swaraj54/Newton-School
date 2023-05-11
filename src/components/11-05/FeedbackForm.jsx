import React, { useState } from 'react'

const FeedbackForm = () => {
    const [rangeValue, setRangeValue] = useState(5);
    // console.log(rangeValue, "rangeValue hereee")
    const [textValue, setTextValue] = useState("");
    const [showError, setShowError] = useState(false);
    function RangeValue(event) {
        // alert("CALLING")
        setRangeValue(event.target.value)
        // console.log(event.target.value, "event.target.value")
    }
    function validation(event) {
        setTextValue(event.target.value);
        if (textValue.length < 5) {
            setShowError(true)
        } else {
            setShowError(false)
        }
    }

    function sendData(event) {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Feedback form</h1>
            <form onSubmit={sendData}>
                <label>Range :</label>
                <input id='rating' min='1' value={rangeValue} max='10' type='range' onChange={RangeValue} />
                <h3 className='rating'>{rangeValue}</h3>
                <br />
                <label>Comment :</label>
                <input type='textarea' onChange={validation} /><br />
                {showError && <p className='comment-error' >Comment must be atleast 5 characters</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FeedbackForm