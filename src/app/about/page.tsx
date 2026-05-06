'use client';

import Link from 'next/link';

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-10">
          <div className="inline-block animate-bounce-slow mb-4">
            <span className="text-6xl">💜</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Welcome to Chronic Haven
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A gentle space created with love for anyone navigating life with chronic invisible illnesses.
            <br />
            <span className="text-purple-600">You are not alone here.</span>
          </p>
        </div>

        {/* Our Story Card */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-50 rounded-3xl shadow-lg p-8 mb-8">
          <div className="text-center mb-4">
            <span className="text-4xl inline-block mb-2">💙</span>
            <h2 className="text-3xl font-black text-gray-800">A Place Just for You</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p className="text-center">
              Living with a chronic invisible illness can feel isolating. You might hear 
              <span className="font-semibold text-purple-600"> "But you don't look sick!"</span> 
              more times than you can count. You may struggle to explain your pain to friends, family, or even doctors.
            </p>
            <p className="text-center">
              <strong>Chronic Haven exists because we understand.</strong> 
              This space was built to be a warm, welcoming corner of the internet where you can find information, 
              connect with others who truly get it, and discover management strategies that might help.
            </p>
            <p className="text-center italic text-purple-600 font-medium">
              "Together, we're stronger. Together, we're seen."
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-8 mb-8">
          <div className="text-center mb-6">
            <span className="text-4xl inline-block mb-2">🌟</span>
            <h2 className="text-4xl font-black text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">
              Everything here is designed with you in mind — gentle, accessible, and full of heart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Expert Information</h3>
                <p className="text-gray-600">Easy-to-understand guides about symptoms, treatments, and specific conditions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="text-3xl">👥</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Supportive Community</h3>
                <p className="text-gray-600">A safe forum to share experiences with others who truly understand.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-3xl">💌</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Feedback & Listening</h3>
                <p className="text-gray-600">Your thoughts help us improve. We read every message and care deeply.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <div className="text-3xl">🔔</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">Regular Updates</h3>
                <p className="text-gray-600">Fresh, reliable content added often as new research emerges.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-8">
          <div className="text-center mb-6">
            <span className="text-4xl inline-block mb-2">💖</span>
            <h2 className="text-4xl font-black text-gray-800 mb-4">Our Values</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🌸</span>
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-1">Compassion First</h3>
                <p className="text-gray-700">Every person who visits matters. Your experience is our priority.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🛡️</span>
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-1">Safety & Privacy</h3>
                <p className="text-gray-700">Your information stays yours. We're committed to protecting your privacy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🌈</span>
              <div>
                <h3 className="font-bold text-gray-800 text-xl mb-1">Inclusivity</h3>
                <p className="text-gray-700">All backgrounds, identities, and experiences are welcome here.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-300 p-8 text-center mb-8">
          <h2 className="text-3xl font-black text-gray-800 mb-4">Ready to Explore?</h2>
          <p className="text-gray-600 text-lg mb-6">
            Take your time. Browse around. There's no pressure, no expectations — just a community ready to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources" 
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all shadow-md"
            >
              View Resources
            </Link>
            <Link 
              href="/community" 
              className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
            >
              Join Community
            </Link>
            <button 
              onClick={scrollToTop}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all"
            >
              Scroll to Top ↑
            </button>
          </div>
        </div>

        {/* Encouraging Footer Message */}
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 text-center">
          <p className="text-4xl mb-4">💜</p>
          <p className="text-gray-800 font-semibold italic leading-relaxed text-xl mb-3">
            "You are not broken. You are adapting. You are surviving. And that is more than enough."
          </p>
          <p className="text-gray-800 font-bold text-lg">
            — The Chronic Haven Team
          </p>
        </div>
      </div>
    </div>
  );
}
