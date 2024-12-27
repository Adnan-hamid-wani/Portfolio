import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}