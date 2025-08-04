/*
 * SitePilot Construction Management System
 * © 2025 Stafford Kleinschmidt. All rights reserved.
 *
 * File: Contact.tsx
 * Description: Contact form and contact info page for WhyNotBuild
 * Last Edited: 2025-08-04
 *
 * License: Proprietary – Do not distribute without permission.
 */

import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon."
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      setSubmitStatus({
        success: false,
        message: error.message || 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="John Doe" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="068 110 0585" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white">
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="Service Question">Service Question</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="How can we help you?" />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Location</h3>
                    <p className="text-gray-600">Umkomaas, KwaZulu-Natal<br />South Africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone Numbers</h3>
                    <p className="text-gray-600">Stafford: <a href="tel:+27681100585" className="hover:text-primary">068 110 0585</a></p>
                    <p className="text-gray-600 mt-1">Dylan: <a href="tel:+27798471559" className="hover:text-primary">079 847 1559</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Addresses</h3>
                    <p className="text-gray-600"><a href="mailto:stafford@ynotbuild.co.za" className="hover:text-primary">stafford@ynotbuild.co.za</a></p>
                    <p className="text-gray-600 mt-1"><a href="mailto:dylan@ynotbuild.co.za" className="hover:text-primary">dylan@ynotbuild.co.za</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="text-gray-600">Mon–Fri: 8:00 AM – 5:00 PM<br />Sat: 9:00 AM – 1:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/whynotbuild" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white rounded-full"><FaFacebook /></a>
                  <a href="https://twitter.com/whynotbuild" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white rounded-full"><FaTwitter /></a>
                  <a href="https://instagram.com/whynotbuild" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white rounded-full"><FaInstagram /></a>
                  <a href="https://linkedin.com/company/whynotbuild" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white rounded-full"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center text-center p-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">Umkomaas, KwaZulu-Natal</p>
              <a href="https://maps.google.com/?q=Umkomaas,KZN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                View on Google Maps
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
