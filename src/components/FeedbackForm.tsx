'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/chronic-haven/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', feedback: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send feedback. Please try again.');
      }
    } catch (err) {
      setError('Error sending feedback. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Share Your Feedback</h2>
      <p className="text-gray-600 mb-6">We'd love to hear your thoughts, suggestions, or ideas for improving our community.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        
        <div>
          <textarea
            name="feedback"
            placeholder="Your feedback or ideas..."
            value={formData.feedback}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Feedback'}
        </button>

        {submitted && (
          <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
            <p className="text-green-700 font-semibold">✓ Thanks for your feedback!</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <p className="text-red-700 font-semibold">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
}
