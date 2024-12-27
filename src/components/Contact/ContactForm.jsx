import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormInput from './FormInput';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <FormInput
        id="name"
        label="Name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <FormInput
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        id="message"
        label="Message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}