'use client';

import Link from 'next/link';

export default function Symptoms() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-5xl inline-block mb-4">📋</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Understanding Chronic Illness Symptoms</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Chronic invisible illnesses affect people in different ways. Understanding your symptoms can help 
            you better manage your condition and communicate with your healthcare providers. 💜
          </p>
        </div>
      </div>

      {/* Pain-Related Symptoms */}
      <div className="bg-white rounded-2xl shadow-md border border-pink-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">😔</span>
          <h2 className="text-2xl font-bold text-gray-800">Pain-Related Symptoms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-pink-200">
            <h3 className="font-bold text-lg text-pink-600 mb-2">Widespread Pain</h3>
            <p className="text-gray-700">
              Chronic pain that can occur throughout the body. Often described as aching, burning, throbbing, 
              or stabbing. Common in fibromyalgia, lupus, and ME/CFS.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200">
            <h3 className="font-bold text-lg text-purple-600 mb-2">Joint Pain and Stiffness</h3>
            <p className="text-gray-700">
              Pain, swelling, and stiffness in joints. Common in lupus, rheumatoid arthritis, and fibromyalgia.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <h3 className="font-bold text-lg text-blue-600 mb-2">Headaches and Migraines</h3>
            <p className="text-gray-700">
              Chronic or severe headaches, including migraines. Can be triggered by various factors 
              including stress, hormonal changes, and environmental factors.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-5 border border-cyan-200">
            <h3 className="font-bold text-lg text-cyan-600 mb-2">Neuropathic Pain</h3>
            <p className="text-gray-700">
              Burning, tingling, or shooting pain, often described as "pins and needles." Common in diabetes 
              (neuropathy), CRPS, and fibromyalgia.
            </p>
          </div>
        </div>
      </div>

      {/* Fatigue and Energy Symptoms */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">⚡</span>
          <h2 className="text-2xl font-bold text-gray-800">Fatigue and Energy-Related Symptoms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200">
            <h3 className="font-bold text-lg text-purple-600 mb-2">Severe Fatigue</h3>
            <p className="text-gray-700">
              Extreme tiredness that goes beyond normal exhaustion and isn't relieved by rest. 
              A hallmark of ME/CFS, fibromyalgia, and many autoimmune conditions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-5 border border-indigo-200">
            <h3 className="font-bold text-lg text-indigo-600 mb-2">Post-Exertional Malaise (PEM)</h3>
            <p className="text-gray-700">
              Worsening of symptoms after physical or mental exertion. A key feature of ME/CFS 
              where even small activities can lead to severe crashes.
            </p>
          </div>
        </div>
      </div>

      {/* Cognitive Symptoms */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🧠</span>
          <h2 className="text-2xl font-bold text-gray-800">Cognitive Symptoms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <h3 className="font-bold text-lg text-blue-600 mb-2">Brain Fog</h3>
            <p className="text-gray-700">
              Difficulty concentrating, focusing, and remembering things. Common in fibromyalgia, 
              ME/CFS, lupus, and many chronic conditions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-5 border border-cyan-200">
            <h3 className="font-bold text-lg text-cyan-600 mb-2">Memory Problems</h3>
            <p className="text-gray-700">
              Short-term memory issues, difficulty finding words, and trouble multitasking. 
              Can affect daily functioning and work performance.
            </p>
          </div>
        </div>
      </div>

      {/* Sleep and Rest Symptoms */}
      <div className="bg-white rounded-2xl shadow-md border border-teal-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">😴</span>
          <h2 className="text-2xl font-bold text-gray-800">Sleep and Rest Symptoms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-5 border border-teal-200">
            <h3 className="font-bold text-lg text-teal-600 mb-2">Unrefreshing Sleep</h3>
            <p className="text-gray-700">
              Waking up feeling tired despite getting enough sleep. Common in fibromyalgia, 
              ME/CFS, and many chronic pain conditions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-lg text-green-600 mb-2">Sleep Disturbances</h3>
            <p className="text-gray-700">
              Difficulty falling asleep, staying asleep, or irregular sleep patterns. 
              Can include insomnia or hypersomnia (sleeping too much).
            </p>
          </div>
        </div>
      </div>

      {/* Digestive Symptoms */}
      <div className="bg-white rounded-2xl shadow-md border border-yellow-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌸</span>
          <h2 className="text-2xl font-bold text-gray-800">Digestive Symptoms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-5 border border-yellow-200">
            <h3 className="font-bold text-lg text-yellow-600 mb-2">Bloating and Gas</h3>
            <p className="text-gray-700">
              Abdominal bloating, excessive gas, and discomfort. Common in IBS, fibromyalgia, 
              and various digestive conditions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 border border-orange-200">
            <h3 className="font-bold text-lg text-orange-600 mb-2">Irregular Bowel Habits</h3>
            <p className="text-gray-700">
              Alternating between diarrhea and constipation, or other changes in bowel habits. 
              Characteristic of IBS and other gastrointestinal conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Sensory Symptoms */}
      <div className="bg-white rounded-2xl shadow-md border border-red-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">👁️</span>
          <h2 className="text-2xl font-bold text-gray-800">Sensory and Physical Symptoms</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-5 border border-red-200">
            <h3 className="font-bold text-lg text-red-600 mb-2">Sensory Sensitivities</h3>
            <p className="text-gray-700">
              Increased sensitivity to light, sound, smells, temperature, or touch. Common in 
              fibromyalgia, ME/CFS, and neurological conditions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-200">
            <h3 className="font-bold text-lg text-pink-600 mb-2">Temperature Sensitivity</h3>
            <p className="text-gray-700">
              Feeling unusually cold or hot, or difficulty regulating body temperature. 
              Common in multiple sclerosis, fibromyalgia, and thyroid conditions.
            </p>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl p-5 border border-rose-200">
            <h3 className="font-bold text-lg text-rose-600 mb-2">Numbness and Tingling</h3>
            <p className="text-gray-700">
              "Pins and needles" sensations, numbness, or burning in hands, feet, or face. 
              Can indicate nerve involvement (neuropathy) or circulation issues.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-200">
            <h3 className="font-bold text-lg text-purple-600 mb-2">Dizziness and Vertigo</h3>
            <p className="text-gray-700">
              Feeling lightheaded, unsteady, or room-spinning vertigo. Can be related to 
              autonomic dysfunction, inner ear issues, or blood pressure problems.
            </p>
          </div>
        </div>
      </div>

      {/* What Can You Do */}
      <div className="bg-white rounded-2xl shadow-md border border-green-100 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌱</span>
          <h2 className="text-2xl font-bold text-gray-800">What Can You Do?</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <p>
            While managing chronic illness symptoms can be challenging, there are strategies that can help:
          </p>
          <ul className="space-y-2 ml-4">
            <li>✓ Keep a symptom diary to track patterns and triggers</li>
            <li>✓ Work with healthcare providers to develop personalized management plans</li>
            <li>✓ Practice pacing and listen to your body's signals</li>
            <li>✓ Prioritize rest and sleep hygiene</li>
            <li>✓ Stay hydrated and maintain balanced nutrition</li>
            <li>✓ Connect with supportive communities who understand</li>
            <li>✓ Practice stress management techniques</li>
          </ul>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-2xl shadow-md border border-purple-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-4xl inline-block mb-3">💜</span>
          <h2 className="text-3xl font-black text-gray-800 mb-4">You Are Not Alone</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Remember, your symptoms are real and valid. Many people around the world understand what you're going through.
          </p>
          <p className="text-gray-800 font-bold text-xl">
            Take things one day at a time. You've got this! ✨
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md"
        >
          Back to Top
        </button>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md">
          Back to Home
        </Link>
      </div>

    </div>
  );
}
