import React, { useState } from 'react';
function FormsModerate() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted.. Submit data to backend..")
        setFirstName('');
        setLastName('');
        setEmail("");
        setMessage("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
export default FormsModerate;

// import { useState } from "react";


// async function FormsModerate() {
//     const [name, setName] = useState("");
//     console.log("Name her-", name);
//     function submitDataToBackend() {
//         alert("Called fucntion..")
//         // Call backend api here and pass the data
//         // const response = await axios.post("/submit-data", {name});
//         // console.log(response);
//     }
//     return (
//         <>
//             <form onSubmit={submitDataToBackend}>
//                 <label>
//                     TYpe your name
//                     <input type="text" onChange={(event) => setName(event.target.value)} />
//                 </label>

//                 <button type="submit">Click here to Submit data!</button>
//             </form>
//         </>
//     )
// }

// export default FormsModerate;



// axios - this is package which help us to connect / call backend api's..
// axios we can send / pass data to  backend function;

// axios.post - im passing some data to backend 
// axios.get - im calling the api , which will return data/anything....

// const { name } = req.body;