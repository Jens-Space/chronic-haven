'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Treatments() {
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
      <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-2xl shadow-md border border-purple-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-5xl inline-block mb-4">💊</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Management & Treatment</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            While there is no cure for many chronic invisible illnesses, effective management is possible. 
            Find strategies that work for you and improve your quality of life. 💜
          </p>
        </div>
      </div>

      {/* Understanding Treatment */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌟</span>
          <h2 className="text-2xl font-bold text-gray-800">Understanding Treatment</h2>
        </div>
        <p className="mb-4 text-gray-700 leading-relaxed">
          While there is no cure for many chronic invisible illnesses, effective management is possible through 
          a combination of treatments tailored to individual needs. The goal is to reduce symptoms, improve 
          quality of life, and help you live as fully as possible.
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
          <p className="text-gray-700">
            <strong>Key principle:</strong> Treatment plans should be individualized. What works for one person 
            may not work for another. It may take time to find the right combination of treatments for you.
          </p>
        </div>
      </div>

      {/* Medications */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">💉</span>
          <h2 className="text-2xl font-bold text-gray-800">Common Medications</h2>
        </div>
        <p className="mb-4 text-gray-700">Medications used for various chronic invisible illnesses include:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-pink-200">
            <h3 className="font-bold text-lg text-pink-600 mb-2">Pain Management</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Over-the-counter pain relievers (ibuprofen, acetaminophen)</li>
              <li>• Gabapentin or pregabalin for nerve pain</li>
              <li>• Low-dose antidepressants (SNRIs, TCAs)</li>
              <li>• Topical treatments (lidocaine, capsaicin)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200">
            <h3 className="font-bold text-lg text-purple-600 mb-2">Anti-Inflammatories</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• NSAIDs for pain and inflammation</li>
              <li>• Corticosteroids for flare-ups</li>
              <li>• Disease-modifying antirheumatic drugs (DMARDs)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <h3 className="font-bold text-lg text-blue-600 mb-2">Fatigue Management</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Stimulants (in some cases)</li>
              <li>• Energy management strategies</li>
              <li>• Sleep medications when appropriate</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-5 border border-cyan-200">
            <h3 className="font-bold text-lg text-cyan-600 mb-2">Gut Health</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Antispasmodics for IBS</li>
              <li>• Laxatives or anti-diarrheals</li>
              <li>• Probiotics and gut-directed therapies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Non-Medication Approaches */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌿</span>
          <h2 className="text-2xl font-bold text-gray-800">Non-Medication Approaches</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <h3 className="font-bold text-lg text-blue-600 mb-2">Physical Approaches</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Gentle exercise adapted to your abilities</li>
              <li>• Physical therapy</li>
              <li>• Hydrotherapy/aquatic therapy</li>
              <li>• Stretching and flexibility work</li>
              <li>• Graded exercise therapy (with caution for ME/CFS)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-5 border border-cyan-200">
            <h3 className="font-bold text-lg text-cyan-600 mb-2">Mind-Body Therapies</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Cognitive Behavioral Therapy (CBT)</li>
              <li>• Mindfulness and meditation</li>
              <li>• Relaxation techniques</li>
              <li>• Yoga and tai chi (adapted)</li>
              <li>• Breathing exercises</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-5 border border-teal-200">
            <h3 className="font-bold text-lg text-teal-600 mb-2">Complementary Therapies</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Acupuncture</li>
              <li>• Massage therapy</li>
              <li>• Heat and cold therapy</li>
              <li>• TENS (transcutaneous electrical nerve stimulation)</li>
              <li>• Biofeedback</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-lg text-green-600 mb-2">Lifestyle Management</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Pacing and energy conservation</li>
              <li>• Sleep hygiene improvements</li>
              <li>• Balanced nutrition</li>
              <li>• Stress reduction</li>
              <li>• Environmental modifications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Daily Management Strategies */}
      <div className="bg-white rounded-2xl shadow-md border border-teal-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📅</span>
          <h2 className="text-2xl font-bold text-gray-800">Daily Management Strategies</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-pink-50 rounded-xl">
            <div className="text-3xl mb-2">📅</div>
            <h4 className="font-bold mb-2 text-pink-600">Pacing</h4>
            <p className="text-sm text-gray-600">Balance activity and rest to avoid flare-ups.</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-3xl mb-2">🧘</div>
            <h4 className="font-bold mb-2 text-purple-600">Stress Management</h4>
            <p className="text-sm text-gray-600">Practice relaxation techniques and mindfulness.</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-3xl mb-2">😴</div>
            <h4 className="font-bold mb-2 text-blue-600">Sleep Hygiene</h4>
            <p className="text-sm text-gray-600">Establish consistent sleep routines.</p>
          </div>
          <div className="text-center p-4 bg-teal-50 rounded-xl">
            <div className="text-3xl mb-2">🥗</div>
            <h4 className="font-bold mb-2 text-teal-600">Nutrition</h4>
            <p className="text-sm text-gray-600">Maintain a balanced diet.</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-3xl mb-2">👥</div>
            <h4 className="font-bold mb-2 text-green-600">Support Network</h4>
            <p className="text-sm text-gray-600">Connect with others who understand.</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-xl">
            <div className="text-3xl mb-2">📝</div>
            <h4 className="font-bold mb-2 text-yellow-600">Symptom Tracking</h4>
            <p className="text-sm text-gray-600">Keep a diary of symptoms and triggers.</p>
          </div>
        </div>
      </div>

      {/* Working with Healthcare Providers */}
      <div className="bg-white rounded-2xl shadow-md border border-yellow-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">👩‍⚕️</span>
          <h2 className="text-2xl font-bold text-gray-800">Working with Healthcare Providers</h2>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 space-y-3">
          <p className="text-gray-700 leading-relaxed">
            <strong>Multidisciplinary approach:</strong> Consider working with a team including rheumatologists, 
            pain management specialists, physical therapists, gastroenterologists, and mental health professionals 
            depending on your conditions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Track your progress:</strong> Keep a symptom diary and communicate openly with your healthcare 
            providers about what works and what doesn't. Treatment plans may need adjustment over time.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Be your own advocate:</strong> If you feel your concerns aren't being heard, seek second opinions 
            and don't give up on finding the right care for you.
          </p>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-2xl shadow-md border border-purple-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-4xl inline-block mb-3">💜</span>
          <h2 className="text-3xl font-black text-gray-800 mb-4">Finding What Works for You</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Remember, managing a chronic illness is a journey. Be patient with yourself and celebrate 
            every small victory along the way.
          </p>
          <p className="text-gray-800 font-bold text-xl">
            You've got this! Every day you try is a win. ✨
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600 transition-colors shadow-md"
        >
          Back to Top
        </button>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600 transition-colors shadow-md">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
