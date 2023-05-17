import React, { useState } from 'react';

function PostRequest() {
    // const [formData, setFormData] = useState({ name: '', email: '' });
    const [formData, setFormData] = useState({
        title: '',
        price: 13.5,
        description: '',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    });
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    }
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostRequest