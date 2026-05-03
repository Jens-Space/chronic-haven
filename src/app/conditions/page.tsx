import Link from 'next/link';

export default function Conditions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Conditions We Cover
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Information and resources for a wide range of chronic invisible illnesses
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Overview */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is a Chronic Invisible Illness?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chronic invisible illnesses are conditions that have no visible symptoms but can cause significant 
              physical or mental distress. They are often misunderstood and can be challenging to diagnose.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📋
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Characteristics</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Chronic: Lasting for more than three months</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Invisible: No visible symptoms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Variable: Symptoms can vary from day to day</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Multisystem: Affecting multiple systems of the body</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnosis Challenges</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>No specific test for many conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Symptoms overlap with other conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Healthcare provider knowledge gaps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Stigma and disbelief from others</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Library */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conditions Library</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Information about specific chronic invisible illnesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">🦋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Lupus</h3>
              <p className="text-gray-600 text-sm">
                A chronic autoimmune disease that causes inflammation and damage to various parts of the body.
              </p>
              <Link 
                href="/lupus" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">💨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Asthma</h3>
              <p className="text-gray-600 text-sm">
                A chronic respiratory condition that causes inflammation and narrowing of the airways, 
                making it difficult to breathe.
              </p>
              <Link 
                href="/asthma" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">🌸</div>
              <h3 className="font-semibold text-gray-900 mb-2">IBS</h3>
              <p className="text-gray-600 text-sm">
                Irritable Bowel Syndrome is a chronic gastrointestinal disorder that affects the 
                large intestine, causing abdominal pain and changes in bowel habits.
              </p>
              <Link 
                href="/ibs" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">🦴</div>
              <h3 className="font-semibold text-gray-900 mb-2">CRPS</h3>
              <p className="text-gray-600 text-sm">
                Complex Regional Pain Syndrome is a chronic pain condition that usually affects 
                one limb after an injury.
              </p>
              <Link 
                href="/crps" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">🤯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fibromyalgia</h3>
              <p className="text-gray-600 text-sm">
                A chronic pain disorder characterized by widespread musculoskeletal pain, 
                fatigue, and tenderness in localized areas.
              </p>
              <Link 
                href="/fibromyalgia" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">ME/CFS</h3>
              <p className="text-gray-600 text-sm">
                Myalgic Encephalomyelitis/Chronic Fatigue Syndrome is a complex, 
                chronic illness characterized by extreme fatigue that doesn't improve with rest.
              </p>
              <Link 
                href="/me-cfs" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">🏃</div>
              <h3 className="font-semibold text-gray-900 mb-2">Endometriosis</h3>
              <p className="text-gray-600 text-sm">
                A chronic condition where tissue similar to the lining of the uterus grows outside the uterus, 
                causing pain and other symptoms.
              </p>
              <Link 
                href="/endometriosis" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-semibold text-gray-900 mb-2">More Conditions</h3>
              <p className="text-gray-600 text-sm">
                There are many other chronic invisible illnesses that affect people worldwide. 
                If you don't see your condition listed, we're here to help.
              </p>
              <Link 
                href="/conditions/more" 
                className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed">
              If you're looking for information about a specific condition or need help managing your symptoms, we're here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources" 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-md"
              >
                Explore Resources
              </Link>
              <Link 
                href="/community" 
                className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg border border-purple-300 hover:bg-purple-800 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
