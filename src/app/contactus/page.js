"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(
            "service_6dul7vg",
            "template_49rqd5w",
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            "KLuUyuo2Mlddj0qeY"
        )
            .then((response) => {
                console.log('Email sent successfully!', response);
                toast.success('Mail send!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className="max-w-md mx-auto p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                        rows="4"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
