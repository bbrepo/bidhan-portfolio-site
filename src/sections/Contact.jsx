import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
    alert("Message sent successfully!");
    // Reset form
    setFormData({
      email: "",
      subject: "",
      details: "",
    });
  };

  return (
    <div className="py-4">
      <div className="flex  justify-center md:justify-start mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Contact Me
        </h1>
      </div>

      <div className="w-full bg-gray-300 rounded-lg p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block  text-sm sm:text-base font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm sm:text-base font-semibold text-gray-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              className="w-full px-4 py-2 sm:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Details Field */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm sm:text-base font-semibold text-gray-700 mb-2"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              placeholder="Enter your message details"
              rows="6"
              className="w-full px-4 py-2 sm:py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
