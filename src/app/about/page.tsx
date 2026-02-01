'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
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
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <span className="text-5xl inline-block mb-4">💜</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">About Chronic Haven</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We're so glad you've found your way here. This space was created with love and care 
            for everyone navigating life with chronic invisible illnesses.
          </p>
        </div>

        {/* What are Chronic Invisible Illnesses */}
        <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🌟</span>
            <h2 className="text-3xl font-black text-gray-800">What Are Chronic Invisible Illnesses?</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Chronic invisible illnesses are long-term health conditions that aren't immediately apparent to others 
              but significantly impact daily life. Despite not showing visible symptoms, these conditions can be 
              debilitating and affect every aspect of life.
            </p>
            <p>
              These conditions are diverse and include autoimmune diseases, neurological conditions, gastrointestinal 
              disorders, respiratory conditions, and chronic pain conditions. They affect millions of people worldwide, 
              regardless of age, gender, or background.
            </p>
            <p className="font-semibold text-purple-600">
              Remember: Your pain and struggles are valid, even if others can't see them. You're not alone in this journey.
            </p>
          </div>
        </div>

        {/* Examples of Conditions */}
        <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🏥</span>
            <h2 className="text-3xl font-black text-gray-800">Conditions We Support</h2>
            <p className="text-gray-600 font-medium text-base mt-2">
              Chronic invisible illnesses come in many forms. Here are some of the conditions we provide information about:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-pink-50 rounded-xl text-center">
              <span className="text-2xl">🦋</span>
              <h3 className="font-bold text-pink-600 mt-2">Lupus</h3>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl text-center">
              <span className="text-2xl">💨</span>
              <h3 className="font-bold text-purple-600 mt-2">Asthma</h3>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl text-center">
              <span className="text-2xl">🌸</span>
              <h3 className="font-bold text-blue-600 mt-2">IBS</h3>
            </div>
            <div className="p-4 bg-cyan-50 rounded-xl text-center">
              <span className="text-2xl">🦴</span>
              <h3 className="font-bold text-cyan-600 mt-2">CRPS</h3>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl text-center">
              <span className="text-2xl">🤯</span>
              <h3 className="font-bold text-teal-600 mt-2">Fibromyalgia</h3>
            </div>
            <div className="p-4 bg-green-50 rounded-xl text-center">
              <span className="text-2xl">⚡</span>
              <h3 className="font-bold text-green-600 mt-2">ME/CFS</h3>
            </div>
            <div className="p-4 bg-yellow-50 rounded-xl text-center">
              <span className="text-2xl">🏃</span>
              <h3 className="font-bold text-yellow-600 mt-2">Endometriosis</h3>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl text-center">
              <span className="text-2xl">🩸</span>
              <h3 className="font-bold text-orange-600 mt-2">Diabetes</h3>
            </div>
          </div>
        </div>

        {/* Common Characteristics */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">💪</span>
            <h2 className="text-3xl font-black text-gray-800">Common Challenges</h2>
            <p className="text-gray-600 font-medium text-base mt-2">
              Many chronic invisible illnesses share similar symptoms and challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 rounded-xl border-l-4 border-pink-400">
              <h3 className="font-bold text-pink-600 mb-1">Chronic Pain</h3>
              <p className="text-gray-700">Persistent pain that can affect multiple areas of the body</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-400">
              <h3 className="font-bold text-purple-600 mb-1">Severe Fatigue</h3>
              <p className="text-gray-700">Extreme tiredness that isn't relieved by rest</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-600 mb-1">Cognitive Issues</h3>
              <p className="text-gray-700">Often called "brain fog" - issues with memory and concentration</p>
            </div>
            <div className="p-4 bg-cyan-50 rounded-xl border-l-4 border-cyan-400">
              <h3 className="font-bold text-cyan-600 mb-1">Sleep Problems</h3>
              <p className="text-gray-700">Difficulty sleeping or non-restorative sleep</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl border-l-4 border-teal-400">
              <h3 className="font-bold text-teal-600 mb-1">Sensory Sensitivities</h3>
              <p className="text-gray-700">Increased sensitivity to light, sound, temperature, or touch</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
              <h3 className="font-bold text-green-600 mb-1">Flare-ups</h3>
              <p className="text-gray-700">Symptoms that come and go, often unpredictable</p>
            </div>
          </div>
        </div>

        {/* Hope and Management */}
        <div className="bg-white rounded-2xl shadow-md border border-yellow-100 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🌱</span>
            <h2 className="text-3xl font-black text-gray-800">Hope and Management</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              While many chronic invisible illnesses have no cure, many people lead full and meaningful lives by working 
              with healthcare providers to develop personalized management plans. What works for one person 
              may not work for another, and that's okay.
            </p>
            <p>
              Effective management strategies include:
            </p>
            <ul className="ml-6 space-y-2 text-gray-700">
              <li>✓ Gentle exercise adapted to your abilities</li>
              <li>✓ Stress management techniques such as meditation</li>
              <li>✓ Improving sleep habits and creating a restful environment</li>
              <li>✓ Balanced nutrition and staying hydrated</li>
              <li>✓ Working with understanding healthcare professionals</li>
              <li>✓ Pacing yourself and listening to your body</li>
              <li>✓ Connecting with supportive communities</li>
            </ul>
            <p className="font-semibold text-purple-600">
              Every small step you take towards managing your condition is a victory. Be patient and kind to yourself.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-2xl shadow-md border border-red-100 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🤝</span>
            <h2 className="text-3xl font-black text-gray-800">Our Mission</h2>
          </div>
          <div className="text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Chronic Haven was created with one goal in mind: to be a warm, welcoming space for anyone 
              living with chronic invisible illnesses. We believe that information, community, and understanding can make 
              a real difference in your journey.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Whether you're newly diagnosed, have been managing a chronic condition for years, or are supporting 
              someone who lives with an invisible illness, we're here for you.
            </p>
            <p className="text-gray-800 font-bold text-xl">
              You are stronger than you know. 💜
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-pink-50 rounded-2xl shadow-md border border-pink-200 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">💡</span>
            <h2 className="text-3xl font-black text-gray-800">Important Things to Remember</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-800 font-semibold">
                <strong>✨ Your experience is unique:</strong> Chronic illnesses affect people differently, 
                and symptoms can change over time. What works for one person may not work for another.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-800 font-semibold">
                <strong>👩‍⚕️ Seek professional advice:</strong> Always consult healthcare professionals 
                for personalized diagnosis and treatment plans. This website provides general information 
                and is not a substitute for medical advice.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-800 font-semibold">
                <strong>💜 Be gentle with yourself:</strong> Living with a chronic illness can be challenging. 
                Celebrate your victories, no matter how small, and remember that asking for help is a sign of strength.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
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
    </div>
  );
}
