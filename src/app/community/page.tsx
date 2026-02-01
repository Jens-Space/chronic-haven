'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Community() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-5xl inline-block mb-4">💜</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Find Your Community</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Connect with others who truly understand what you're going through.<br />
            <span className="text-base font-normal">You're not alone on this journey 💜</span>
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Living with a chronic invisible illness can feel isolating, but you don't have to face it alone. 
          Connecting with others who share similar experiences can provide invaluable emotional support, 
          practical tips, and a sense of belonging.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Whether you live with fibromyalgia, ME/CFS, lupus, IBS, CRPS, diabetes, endometriosis, 
          or any other chronic invisible illness, <strong>you are welcome here</strong>. 💜
        </p>
      </div>

      {/* Online Communities */}
      <div className="bg-white rounded-2xl shadow-md border border-teal-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌐</span>
          <h2 className="text-2xl font-bold text-gray-800">Online Communities</h2>
        </div>
        <p className="text-gray-600 mb-4">Discover supportive online communities where you can share experiences, ask questions, and find understanding:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://healthunlocked.com/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-200 hover:border-teal-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-teal-600 mb-2">HealthUnlocked</h3>
            <p className="text-sm text-gray-600">Health-focused communities with verified information and peer support from people who understand.</p>
          </a>
          <a href="https://themighty.com/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-cyan-600 mb-2">The Mighty</h3>
            <p className="text-sm text-gray-600">Real stories and support from people facing health challenges. Find your tribe here.</p>
          </a>
          <a href="https://cpa.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-blue-600 mb-2">Chronic Pain Anonymous</h3>
            <p className="text-sm text-gray-600">A welcoming 12-step program for people living with chronic pain. Find understanding and support.</p>
          </a>
          <a href="https://www.stuffthatworks.health/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-indigo-600 mb-2">StuffThatWorks</h3>
            <p className="text-sm text-gray-600">A supportive platform for sharing and discovering treatments that work from real people.</p>
          </a>
          <a href="https://www.togetherall.com/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-purple-600 mb-2">Togetherall</h3>
            <p className="text-sm text-gray-600">A safe online community for mental health support, free for NHS patients. You're not alone.</p>
          </a>
          <a href="https://www.patientslikeme.com/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all">
            <h3 className="font-bold text-pink-600 mb-2">PatientsLikeMe</h3>
            <p className="text-sm text-gray-600">Connect with patients, share your journey, and track your health with people who care.</p>
          </a>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 rounded-2xl shadow-md border border-teal-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-4xl inline-block mb-3">💜</span>
          <h2 className="text-3xl font-black text-gray-800 mb-4">Remember: You're Not Alone</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Millions of people around the world live with chronic invisible illnesses and understand exactly what you're going through.
            Reaching out to others is a sign of strength, not weakness.
          </p>
          <p className="text-gray-800 font-bold text-xl">
            Your community is waiting for you. Take that first step today! ✨
          </p>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="text-center mb-6">
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors border-2 border-purple-500">
          Back to Home
        </Link>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
