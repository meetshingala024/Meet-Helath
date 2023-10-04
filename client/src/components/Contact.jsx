import React, { useState } from "react";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  return (
    <section className="register-section flex items-center justify-center min-h-screen bg-gray-100" id="contact">
      <div className="contact-container bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form method="POST" action={`https://formspree.io/f/xgejplnj`} className="register-form">
          <input
            type="text"
            name="name"
            className="form-input mb-4"
            placeholder="Your Name"
            value={formDetails.name}
            onChange={inputChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input mb-4"
            placeholder="Your Email"
            value={formDetails.email}
            onChange={inputChange}
            required
          />
          <textarea
            type="text"
            name="message"
            className=" mb-4"
            placeholder="Your Message"
            value={formDetails.message}
            onChange={inputChange}
            rows="8"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
