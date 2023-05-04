import React, { useState } from 'react';

function ValidationReact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check for form errors
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            // No errors, submit the form to backend while calling the api
            console.log(formData);
            // const response = await axios.post("/form", { formData });
            // console.log(response)
            // if(response.data.message === true){
            //     alert("Data submitted")
            //     Router('/next-page')
            // }
        } else {
            // Set the form errors
            setFormErrors(errors);
        }
    };
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const validateForm = () => {
        let errors = {};
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        return errors; // errors is a Object-{}
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                {formErrors.firstName && <div className="error">{formErrors.firstName}</div>}
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                {formErrors.lastName && <div className="error">{formErrors.lastName}</div>}
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                {formErrors.email && <div className="error">{formErrors.email}</div>}
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleInputChange} />
                {formErrors.message && <div className="error">{formErrors.message}</div>}
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
export default ValidationReact;
