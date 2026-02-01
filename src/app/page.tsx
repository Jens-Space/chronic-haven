import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">Fibro Support Hub 💜</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed mb-4">
            A warm, welcoming space just for you. Take your time exploring and learning about fibromyalgia — 
            there's no rush here. We're so glad you've found your way to us! ✨
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 text-white rounded-full text-sm font-bold shadow-md">
            <span>👋</span>
            <span>Welcome! We're so happy you're here.</span>
          </div>
        </div>
      </div>

      {/* Understanding Fibromyalgia */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 mb-6">
        <div className="text-center mb-6">
          <span className="text-4xl inline-block mb-3">🌟</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800">Understanding Fibromyalgia</h2>
          <p className="text-gray-600 font-medium text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Let's explore fibromyalgia together. Understanding what you're experiencing is the first step 
            toward feeling better. Remember — you're not alone in this journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/symptoms" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                📋
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-pink-600 transition-colors">Symptoms</h3>
              <p className="text-gray-600 font-medium text-base">Learn about common symptoms and what they mean.</p>
            </div>
          </Link>
          <Link href="/treatments" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                💊
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-purple-600 transition-colors">Treatments</h3>
              <p className="text-gray-600 font-medium text-base">Discover ways to help manage and reduce symptoms.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 mb-6">
        <div className="text-center mb-6">
          <span className="text-4xl inline-block mb-3">📚</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800">Resources & Support</h2>
          <p className="text-gray-600 font-medium text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Here you'll find helpful information, supportive organizations, and ways to connect with 
            others who truly understand what you're going through.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/resources" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                📖
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">Resources</h3>
              <p className="text-gray-600 font-medium text-base">Helpful guides, articles, and trusted organizations.</p>
            </div>
          </Link>
          <Link href="/community" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                👥
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-cyan-600 transition-colors">Community</h3>
              <p className="text-gray-600 font-medium text-base">Connect with others who understand your journey.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Tools */}
      <div className="bg-white rounded-2xl shadow-md border border-yellow-100 p-6 mb-6">
        <div className="text-center mb-6">
          <span className="text-4xl inline-block mb-3">🛠️</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800">Helpful Tools</h2>
          <p className="text-gray-600 font-medium text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Handy tools to help you track your symptoms and get answers to your questions — 
            all designed to make your journey a little easier.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/tracker" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                📊
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-yellow-600 transition-colors">Symptom Tracker</h3>
              <p className="text-gray-600 font-medium text-base">Keep track of your symptoms over time.</p>
            </div>
          </Link>
          <Link href="/chatbot" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 hover:border-orange-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                💬
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-orange-600 transition-colors">AI Assistant</h3>
              <p className="text-gray-600 font-medium text-base">Get friendly answers to your questions.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Encouraging Message - Same as Welcome Section Style */}
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center">
          <p className="text-4xl mb-3">💜</p>
          <p className="text-gray-800 font-semibold italic leading-relaxed text-lg mb-3">
            You are stronger than you know. Every day you show up for yourself is a victory. 
            Be gentle with yourself — you are doing the best you can.
          </p>
          <p className="text-gray-800 font-bold text-base">
            Take things one day at a time. You've got this! ✨
          </p>
        </div>
      </div>
    </div>
  );
}
