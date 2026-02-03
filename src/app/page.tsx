import Link from 'next/link';
import FeedbackForm from '@/components/FeedbackForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">Chronic Haven 💜</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed mb-4">
            A warm, welcoming space for those living with chronic invisible illnesses. 
            From fibromyalgia to IBS, asthma, lupus, CRPS, and beyond — 
            take your time exploring. There's no rush here. We're so glad you've found your way to us! ✨
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 text-white rounded-full text-sm font-bold shadow-md">
            <span>👋</span>
            <span>Welcome! We're so happy you're here.</span>
          </div>
        </div>
      </div>

      {/* Understanding Chronic Invisible Illnesses */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 mb-6">
        <div className="text-center mb-6">
          <span className="text-4xl inline-block mb-3">🌟</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800">Understanding Invisible Illnesses</h2>
          <p className="text-gray-600 font-medium text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Chronic invisible illnesses affect millions of people worldwide. These conditions aren't 
            immediately apparent to others but significantly impact daily life. Let's explore them together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/symptoms" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                📋
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-pink-600 transition-colors">Common Symptoms</h3>
              <p className="text-gray-600 font-medium text-base">Learn about symptoms shared by many chronic conditions.</p>
            </div>
          </Link>
          <Link href="/treatments" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                💊
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-purple-600 transition-colors">Management & Treatment</h3>
              <p className="text-gray-600 font-medium text-base">Discover ways to help manage symptoms and improve quality of life.</p>
            </div>
          </Link>
          <Link href="/conditions" className="group">
            <div className="flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl mb-3">
                🏥
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">Conditions</h3>
              <p className="text-gray-600 font-medium text-base">Learn about specific invisible illnesses and their impacts.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Examples of Invisible Illnesses */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <div className="text-center mb-6">
          <span className="text-4xl inline-block mb-3">💪</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800">Conditions We Cover</h2>
          <p className="text-gray-600 font-medium text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Chronic invisible illnesses come in many forms. Here are some of the conditions we provide information about:
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-pink-50 rounded-xl">
            <span className="text-2xl">🦋</span>
            <h3 className="font-bold text-gray-800 mt-2">Lupus</h3>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <span className="text-2xl">💨</span>
            <h3 className="font-bold text-gray-800 mt-2">Asthma</h3>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <span className="text-2xl">🌸</span>
            <h3 className="font-bold text-gray-800 mt-2">IBS</h3>
          </div>
          <div className="text-center p-4 bg-cyan-50 rounded-xl">
            <span className="text-2xl">🦴</span>
            <h3 className="font-bold text-gray-800 mt-2">CRPS</h3>
          </div>
          <div className="text-center p-4 bg-teal-50 rounded-xl">
            <span className="text-2xl">🤯</span>
            <h3 className="font-bold text-gray-800 mt-2">Fibromyalgia</h3>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <span className="text-2xl">⚡</span>
            <h3 className="font-bold text-gray-800 mt-2">ME/CFS</h3>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-xl">
            <span className="text-2xl">🏃</span>
            <h3 className="font-bold text-gray-800 mt-2">Endometriosis</h3>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-xl">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-gray-800 mt-2">And Many More...</h3>
          </div>
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

      {/* Encouraging Message */}
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

      {/* Feedback Section */}
      <FeedbackForm />
    </div>
  );
}
