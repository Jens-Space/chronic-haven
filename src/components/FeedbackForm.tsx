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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '95169d0f-d7c6-4e80-aba1-fa32b7e21ddb',
          name: formData.name,
          email: formData.email,
          message: formData.feedback,
        }),
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
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl shadow-md border-2 border-purple-200 p-8">
      <div className="text-center mb-6">
        <span className="text-5xl inline-block mb-3">💬</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">We'd Love Your Feedback! 💜</h2>
        <p className="text-gray-600 text-lg">Your thoughts, suggestions, and ideas help us create a better space for everyone. We're listening!</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="What should we call you?"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="So we can get back to you"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all bg-white"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Your Feedback or Ideas</label>
          <textarea
            name="feedback"
            placeholder="Tell us what you think! Share your ideas, suggestions, or just let us know how we're doing..."
            value={formData.feedback}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none bg-white"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed disabled:scale-100 shadow-lg"
        >
          {loading ? '✨ Sending your feedback...' : '📨 Send Feedback'}
        </button>

        {submitted && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl">
            <p className="text-green-700 font-bold text-center text-lg">✨ Thank you so much! We really appreciate your feedback! 💜</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl">
            <p className="text-red-700 font-bold text-center">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
}
