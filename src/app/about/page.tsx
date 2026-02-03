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

        {/* What are Chronic Invisible Illnesses */}
        <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🌟</span>
            <h2 className="text-3xl font-black text-gray-800">What Are Chronic Invisible Illnesses?</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Chronic invisible illnesses are long-term health conditions that aren't immediately apparent to others 
              but significantly impact daily life. Despite not showing visible symptoms, these conditions can be 
              debilitating and affect every aspect of life—from work to relationships to simple daily tasks.
            </p>
            <p>
              These conditions are incredibly diverse and include autoimmune diseases, neurological conditions, 
              gastrointestinal disorders, respiratory conditions, and chronic pain conditions. They affect millions 
              of people worldwide, regardless of age, gender, or background.
            </p>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <p className="font-semibold text-purple-700 text-lg">
                💜 Your pain and struggles are valid, even if others can't see them. 
                Your experience matters. You matter.
              </p>
            </div>
          </div>
        </div>

        {/* Examples of Conditions */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl shadow-md border border-purple-200 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🏥</span>
            <h2 className="text-3xl font-black text-gray-800">Conditions We Support</h2>
            <p className="text-gray-600 font-medium text-base mt-2">
              Chronic invisible illnesses come in many forms. Here are some of the conditions we provide information about:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">🦋</span>
              <h3 className="font-bold text-pink-600 mt-2">Lupus</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">💨</span>
              <h3 className="font-bold text-purple-600 mt-2">Asthma</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">🌸</span>
              <h3 className="font-bold text-blue-600 mt-2">IBS</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">🦴</span>
              <h3 className="font-bold text-cyan-600 mt-2">CRPS</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">🤯</span>
              <h3 className="font-bold text-teal-600 mt-2">Fibromyalgia</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">⚡</span>
              <h3 className="font-bold text-green-600 mt-2">ME/CFS</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">🏃</span>
              <h3 className="font-bold text-yellow-600 mt-2">Endometriosis</h3>
            </div>
            <div className="p-4 bg-white/80 rounded-xl text-center cursor-default">
              <span className="text-3xl">🩸</span>
              <h3 className="font-bold text-orange-600 mt-2">Diabetes</h3>
            </div>
          </div>
        </div>

        {/* Common Characteristics */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">💪</span>
            <h2 className="text-3xl font-black text-gray-800">Common Challenges</h2>
            <p className="text-gray-600 font-medium text-base mt-2">
              Many chronic invisible illnesses share similar symptoms and challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-l-4 border-pink-400">
              <h3 className="font-bold text-pink-600 mb-1">Chronic Pain</h3>
              <p className="text-gray-700">Persistent pain that can affect multiple areas of the body</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-l-4 border-purple-400">
              <h3 className="font-bold text-purple-600 mb-1">Severe Fatigue</h3>
              <p className="text-gray-700">Extreme tiredness that isn't relieved by rest</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-600 mb-1">Cognitive Issues</h3>
              <p className="text-gray-700">Often called "brain fog" - issues with memory and concentration</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border-l-4 border-cyan-400">
              <h3 className="font-bold text-cyan-600 mb-1">Sleep Problems</h3>
              <p className="text-gray-700">Difficulty sleeping or non-restorative sleep</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl border-l-4 border-teal-400">
              <h3 className="font-bold text-teal-600 mb-1">Sensory Sensitivities</h3>
              <p className="text-gray-700">Increased sensitivity to light, sound, temperature, or touch</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl border-l-4 border-green-400">
              <h3 className="font-bold text-green-600 mb-1">Flare-ups</h3>
              <p className="text-gray-700">Symptoms that come and go, often unpredictable</p>
            </div>
          </div>
        </div>

        {/* Hope and Management */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-md border border-teal-100 p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">🌱</span>
            <h2 className="text-3xl font-black text-gray-800">Hope and Management</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              While many chronic invisible illnesses have no cure, many people lead full and meaningful lives by working 
              with healthcare providers to develop personalized management plans. What works for one person 
              may not work for another, and that's okay—your journey is uniquely yours.
            </p>
            <p className="font-semibold text-gray-800">
              Effective management strategies include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Gentle exercise adapted to your abilities</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Stress management like meditation</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Improving sleep habits and environment</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Balanced nutrition and hydration</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Understanding healthcare professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg p-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Pacing yourself and listening to your body</span>
              </div>
            </div>
            <div className="bg-purple-100 rounded-xl p-4 text-center">
              <p className="font-semibold text-purple-700 text-lg">
                🌟 Every small step you take towards managing your condition is a victory. 
                Be patient and kind to yourself—you're doing amazing.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 mb-6 text-white">
          <div className="text-center mb-4">
            <span className="text-4xl inline-block mb-2">🤝</span>
            <h2 className="text-3xl font-black">Our Mission</h2>
          </div>
          <div className="text-center">
            <p className="leading-relaxed text-lg mb-4 opacity-95">
              Chronic Haven was created with one goal in mind: to be a warm, welcoming space for anyone 
              living with chronic invisible illnesses. We believe that information, community, and understanding 
              can make a real difference in your journey.
            </p>
            <p className="leading-relaxed text-lg mb-6 opacity-95">
              Whether you're newly diagnosed, have been managing a condition for years, or are supporting 
              someone who lives with an invisible illness—we're here for you.
            </p>
            <p className="text-3xl font-bold">
              You are stronger than you know. 💜
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-pink-50 rounded-2xl shadow-md border border-pink-200 p-6 mb-6">
          <div className="text-center mb-4">
            <span className="text-3xl inline-block mb-2">💡</span>
            <h2 className="text-3xl font-black text-gray-800">Things to Remember</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 flex gap-3 items-start">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-gray-800 font-semibold">
                  Your experience is unique
                </p>
                <p className="text-gray-600 text-sm">
                  Chronic illnesses affect people differently, and symptoms can change over time. 
                  What works for one person may not work for another.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 flex gap-3 items-start">
              <span className="text-2xl">👩‍⚕️</span>
              <div>
                <p className="text-gray-800 font-semibold">
                  Seek professional advice
                </p>
                <p className="text-gray-600 text-sm">
                  Always consult healthcare professionals for personalized diagnosis and treatment plans. 
                  This website provides general information and is not a substitute for medical advice.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 flex gap-3 items-start">
              <span className="text-2xl">💜</span>
              <div>
                <p className="text-gray-800 font-semibold">
                  Be gentle with yourself
                </p>
                <p className="text-gray-600 text-sm">
                  Living with a chronic illness can be challenging. Celebrate your victories, no matter 
                  how small, and remember that asking for help is a sign of strength.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md"
          >
            Back to Top
          </button>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white !text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md">
            Back to Home
          </Link>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-10 mb-6">
          <p className="text-gray-500 font-medium">
            💙 Thank you for being here. Take care of yourself today. 💙
          </p>
        </div>
      </div>
    </div>
  );
}
