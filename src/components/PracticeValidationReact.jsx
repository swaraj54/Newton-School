import React, { useState } from 'react'

const PracticeValidationReact = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [allErrors, setAllErrors] = useState({});
    console.log(allErrors, 'allErrors')
    function handleChange(event) {
        // alert("Working...")
        // console.log(event.target.value, "- value") // - abc@gmail.com
        // console.log(event.target.name, "- name") // - email , password
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    function submitData(event) {
        event.preventDefault();
        // alert("Working");
        // Step 1 - check errors - check all feilds must be filled with data
        // Step 2 - if its errors then show errors if not then submit the form
        const errors = validateErrors();
        // console.log(errors, "-errors")
        // console.log(Object.keys(errors).length)
        if (Object.keys(errors).length === 0) {
            alert("You filled all the fields, Good.")
            // Call backend and pass the userData
            setUserData({ email: "", password: "" })
            setAllErrors({});
        } else {
            setAllErrors(errors)
        }
    }
    function validateErrors() {
        // Here we will checek errors (checking if data is filled or not)
        let error = {};
        if (!userData.email) {
            error.email = "Email is requied!"
        }
        if (!userData.password) {
            error.password = "Password is required"
        }
        return error;
    }

    return (
        <div>
            <h1>Pratice Validation</h1>
            <form onSubmit={submitData}>
                <label>Email :</label><br />
                <input type='email' value={userData.email} name="email" onChange={handleChange} /><br />
                {allErrors.email && <div><p>{allErrors.email}</p><br /></div>}
                <label>Password :</label><br />
                <input type='password' value={userData.password} name="password" onChange={handleChange} /><br />
                {allErrors.password && <div><p>{allErrors.password}</p><br /></div>}
                <input type='submit' value="Login" />
            </form>
        </div>
    )
}

export default PracticeValidationReact