// // import React from 'react'

import { useState } from "react";

// // const FormsExpert = () => {
// //   return (
// //     <div>FormsExpert</div>
// //   )
// // }

// // export default FormsExpert
// import React, { useState } from 'react';

// function FormsExpert() {
//     const [formData, setFormData] = useState({
//         firstNameOfUser: '',
//         lastName: '',
//         email: '',
//         message: '',
//     });
//     console.log(formData, "formdata firstNameOfUser here...")
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(formData);
//         setFormData({
//             firstNameOfUser: '',
//             lastName: '',
//             email: '',
//             message: '',
//         })
//         // Call backend api here...
//     };
//     const handleInputChange = (event) => {
//         // console.log("event.target.name -", event.target.name)
//         // console.log("event.target.value -", event.target.value)
//         setFormData({
//             ...formData, [event.target.name]: event.target.value,
//         });
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 First Name:
//                 <input type="text" name="firstNameOfUser" value={formData.firstNameOfUser} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Last Name:
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Message:
//                 <textarea name="message" value={formData.message} onChange={handleInputChange} />
//             </label>
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
// export default FormsExpert;


const FormsExpert = () => {
    const [userData, setUserData] = useState({ email: "", password: "" })
    console.log(userData, "userData")
    function submitDataToBackend(event) {
        event.preventDefault();
        alert("Submitted backend..")
        setUserData({ email: "", password: "" })
    }
    function handleForm(event) {
        // console.log("event.target.name -", event.target.name)
        // console.log("event.target.value -", event.target.value)
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={submitDataToBackend}>
                <label>Email</label><br />
                <input type="email" name="email" value={userData.email} onChange={handleForm} /><br />
                <label>Password</label><br />
                <input type="password" name="password" value={userData.password} onChange={handleForm} /><br />
                <input type="submit" />
            </form>
        </>
    )
}
export default FormsExpert;
