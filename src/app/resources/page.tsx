'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Resources() {
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
          <span className="text-5xl inline-block mb-4">📚</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Helpful Resources</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Helpful UK-based resources and support for chronic invisible illnesses. 💜<br />
            <span className="text-base font-normal">Find trusted charities and organisations here</span>
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.nhs.uk/conditions/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏥</span>
              <div>
                <h3 className="font-bold text-blue-600">NHS Conditions</h3>
                <p className="text-sm text-gray-600">The UK's official health website with information on all conditions</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.fmauk.org/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦋</span>
              <div>
                <h3 className="font-bold text-pink-600">Fibromyalgia</h3>
                <p className="text-sm text-gray-600">Fibromyalgia Association UK - Support, information and advice</p>
              </div>
            </div>
          </a>
          
          <a href="https://rsdf.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤯</span>
              <div>
                <h3 className="font-bold text-red-600">CRPS</h3>
                <p className="text-sm text-gray-600">CRPS UK - Support and information for Complex Regional Pain Syndrome</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.theibsnetwork.org/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border-2 border-teal-200 hover:border-teal-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌸</span>
              <div>
                <h3 className="font-bold text-teal-600">IBS</h3>
                <p className="text-sm text-gray-600">The IBS Network - UK charity for Irritable Bowel Syndrome support</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.meassociation.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-bold text-purple-600">ME/CFS</h3>
                <p className="text-sm text-gray-600">ME Association - Support and research for Myalgic Encephalomyelitis</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.lupus.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌙</span>
              <div>
                <h3 className="font-bold text-indigo-600">Lupus</h3>
                <p className="text-sm text-gray-600">Lupus UK - Support and information for lupus patients</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.crohnsandcolitis.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <div>
                <h3 className="font-bold text-green-600">Crohn's & Colitis</h3>
                <p className="text-sm text-gray-600">Crohn's & Colitis UK - Support for inflammatory bowel disease</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.endometriosis-uk.org/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏃</span>
              <div>
                <h3 className="font-bold text-yellow-600">Endometriosis</h3>
                <p className="text-sm text-gray-600">Endometriosis UK - Support and information for endometriosis</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.diabetes.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <h3 className="font-bold text-orange-600">Diabetes</h3>
                <p className="text-sm text-gray-600">Diabetes UK - Support, information and research for diabetes</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.coeliac.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌾</span>
              <div>
                <h3 className="font-bold text-amber-600">Coeliac Disease</h3>
                <p className="text-sm text-gray-600">Coeliac UK - Information and support for celiac disease</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.versusarthritis.org/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦴</span>
              <div>
                <h3 className="font-bold text-cyan-600">Arthritis</h3>
                <p className="text-sm text-gray-600">Versus Arthritis - Support for all types of arthritis</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.chronicillness.org.uk/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl border-2 border-slate-200 hover:border-slate-400 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💜</span>
              <div>
                <h3 className="font-bold text-slate-600">General Support</h3>
                <p className="text-sm text-gray-600">Chronic Illness UK - Support for all chronic conditions</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 rounded-2xl shadow-md border border-teal-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-4xl inline-block mb-3">💜</span>
          <h2 className="text-3xl font-black text-gray-800 mb-4">You're Not Alone</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Remember, there are many resources and communities available to support you on your journey.
            Don't hesitate to reach out for help when you need it.
          </p>
          <p className="text-gray-800 font-bold text-xl">
            Asking for support is a sign of strength. You've got this! ✨
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
