/*
 * SitePilot Construction Management System
 * © 2025 Stafford Kleinschmidt. All rights reserved.
 *
 * File: Contact.tsx
 * Description: Contact form page – sends messages via SendGrid API
 * Last Edited: 2025-08-05
 *
 * License: Proprietary – Do not distribute without permission.
 */

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
    } catch (err) {
      console.error('Form submit error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <button type="submit" className="btn btn-primary">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
        {status === 'success' && <p className="text-green-600">Sent successfully!</p>}
        {status === 'error' && <p className="text-red-600">Error sending message.</p>}
      </form>
    </div>
  );
}