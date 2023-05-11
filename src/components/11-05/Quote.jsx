import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [colors, setColors] = useState(['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857']);
    const [colorToDisplay, setColorToDisplay] = useState("");
    console.log(colorToDisplay, "colorToDisplay here")
    const [singleQuote, setSingleQuote] = useState("");
    const [quoteAuther, setQuoteAuther] = useState("");
    const [quotes, setQuotes] = useState();
    console.log(quotes, 'quotes herere')
    useEffect(() => {
        async function nadim() {
            const data = await axios.get('https://api.quotable.io/quotes')
            // console.log(data.data.results, "data here")
            setQuotes(data.data.results)
        }
        nadim();
        // 1. Making the api call  ❌
        // Storing the data into the state, (update the state) ❌
        // Render the single quote into html ❌
        // Shoe next quote on the on click event ❌
    }, [])
    function nextQuote() {
        // alert("jooo")
        const randomNumber = Math.floor(Math.random() * quotes.length);
        // console.log(randomNumber, 'randomNumber')
        setSingleQuote(quotes[randomNumber].content)
        setQuoteAuther(quotes[randomNumber].author)

        const randomNumberForColro = Math.floor(Math.random() * colors.length);
        setColorToDisplay(colors[randomNumberForColro])
    }
    return (
        <div style={{ backgroundColor: colorToDisplay }}>
            <div className='quote-text'>Quote: {singleQuote && singleQuote}</div>
            <div className='quote-author'>Quote Author: {quoteAuther && quoteAuther}</div>
            <button id='new-quote' onClick={nextQuote}>Click to get new Quote!</button>
        </div>
    )
}
export default Quote