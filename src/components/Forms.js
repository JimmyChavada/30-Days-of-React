import React, { useState } from 'react';
import './form.css';

export default function Forms() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [formValues, setFormValues] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Display all form values in an h1 element
        const formValues = `First Name: ${formData.firstName} | Last Name: ${formData.lastName} | Email: ${formData.email}`;
        setFormData({
            firstName: '',
            lastName: '',
            email: ''
        });
        setFormValues(formValues); // Save form values to state
    }

    return (
        <div className='form-wrapper'>
            <h1>This is a form</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <button type="submit">Submit</button>
            </form>
            {formValues && <h3>{formValues}</h3>}
        </div>
    );
}
