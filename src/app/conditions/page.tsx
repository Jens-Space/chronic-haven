'use client';

import Link from 'next/link';

export default function Conditions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const conditions = [
    {
      name: 'Fibromyalgia',
      emoji: '🤯',
      description: 'A condition causing widespread pain, fatigue, and cognitive difficulties.',
      nhsUrl: 'https://www.nhs.uk/conditions/fibromyalgia/'
    },
    {
      name: 'Lupus',
      emoji: '🦋',
      description: 'An autoimmune condition where the immune system attacks healthy tissue.',
      nhsUrl: 'https://www.nhs.uk/conditions/lupus/'
    },
    {
      name: 'Asthma',
      emoji: '💨',
      description: 'A chronic respiratory condition affecting the airways, making breathing difficult.',
      nhsUrl: 'https://www.nhs.uk/conditions/asthma/'
    },
    {
      name: 'IBS (Irritable Bowel Syndrome)',
      emoji: '🌸',
      description: 'A common digestive condition causing stomach cramps, bloating, and bowel changes.',
      nhsUrl: 'https://www.nhs.uk/conditions/irritable-bowel-syndrome-ibs/'
    },
    {
      name: 'CRPS (Complex Regional Pain Syndrome)',
      emoji: '🦴',
      description: 'A chronic pain condition usually affecting a limb after injury.',
      nhsUrl: 'https://www.nhs.uk/conditions/complex-regional-pain-syndrome/'
    },
    {
      name: 'ME/CFS (Myalgic Encephalomyelitis)',
      emoji: '⚡',
      description: 'A long-term illness with extreme fatigue and post-exertional malaise.',
      nhsUrl: 'https://www.nhs.uk/conditions/chronic-fatigue-syndrome-mecfs/'
    },
    {
      name: 'Endometriosis',
      emoji: '🏃',
      description: 'A condition where tissue similar to the uterine lining grows outside the uterus.',
      nhsUrl: 'https://www.nhs.uk/conditions/endometriosis/'
    },
    {
      name: 'Type 1 Diabetes',
      emoji: '🩸',
      description: 'A chronic condition where the body cannot produce insulin.',
      nhsUrl: 'https://www.nhs.uk/conditions/type-1-diabetes/'
    },
    {
      name: 'Type 2 Diabetes',
      emoji: '🩸',
      description: 'A condition where the body does not produce enough insulin properly.',
      nhsUrl: 'https://www.nhs.uk/conditions/type-2-diabetes/'
    },
    {
      name: 'Rheumatoid Arthritis',
      emoji: '🦴',
      description: 'An autoimmune condition causing joint pain and inflammation.',
      nhsUrl: 'https://www.nhs.uk/conditions/rheumatoid-arthritis/'
    },
    {
      name: 'Multiple Sclerosis',
      emoji: '🧠',
      description: 'A condition affecting the brain and nerves, causing various symptoms.',
      nhsUrl: 'https://www.nhs.uk/conditions/multiple-sclerosis-ms/'
    },
    {
      name: 'Chronic Migraine',
      emoji: '🤕',
      description: 'A neurological condition causing severe, recurring headaches.',
      nhsUrl: 'https://www.nhs.uk/conditions/migraine/'
    },
    {
      name: 'Ehlers-Danlos Syndrome',
      emoji: '💪',
      description: 'A group of conditions affecting connective tissues in the body.',
      nhsUrl: 'https://www.ehlers-danlos.org/'
    },
    {
      name: 'Chronic Lyme Disease',
      emoji: '🐛',
      description: 'A controversial condition that may persist after Lyme disease treatment.',
      nhsUrl: 'https://www.nhs.uk/conditions/lyme-disease/'
    },
    {
      name: 'Celiac Disease',
      emoji: '🍞',
      description: 'An autoimmune condition triggered by eating gluten.',
      nhsUrl: 'https://www.nhs.uk/conditions/coeliac-disease/'
    },
    {
      name: 'Crohns Disease',
      emoji: '🦠',
      description: 'A type of inflammatory bowel disease affecting the digestive tract.',
      nhsUrl: 'https://www.nhs.uk/conditions/crohns-disease/'
    },
    {
      name: 'Ulcerative Colitis',
      emoji: '🦠',
      description: 'A type of inflammatory bowel disease affecting the colon and rectum.',
      nhsUrl: 'https://www.nhs.uk/conditions/ulcerative-colitis/'
    },
    {
      name: "Sjögren's Syndrome",
      emoji: '👁️',
      description: 'An autoimmune condition causing dry eyes and dry mouth.',
      nhsUrl: 'https://www.nhs.uk/conditions/sjogrens-syndrome/'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-5xl inline-block mb-4">🏥</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Chronic Invisible Illnesses</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Chronic invisible illnesses come in many forms. Click on any condition below to learn more 
            from the NHS website. Remember — you're not alone in this journey. 💜
          </p>
        </div>
      </div>

      {/* Conditions Grid */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((condition) => (
            <a
              key={condition.name}
              href={condition.nhsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-center">
                <span className="text-4xl inline-block mb-3 group-hover:scale-110 transition-transform">
                  {condition.emoji}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {condition.name}
                </h2>
                <p className="text-gray-600 font-medium text-sm">
                  {condition.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-purple-600 font-semibold text-sm">
                  <span>Learn more on NHS</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-2xl shadow-md border border-purple-200 p-8 mb-6">
        <div className="text-center">
          <span className="text-4xl inline-block mb-3">💜</span>
          <h2 className="text-3xl font-black text-gray-800 mb-4">You Are Not Alone</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Living with a chronic invisible illness can be challenging, but you don't have to face it alone. 
            Millions of people around the world understand what you're going through.
          </p>
          <p className="text-gray-800 font-bold text-xl">
            Every day you show up for yourself is a victory. Be gentle with yourself. ✨
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
