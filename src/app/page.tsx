import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Chronic Haven
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                A trusted resource for those living with chronic invisible illnesses. 
                Comprehensive information, supportive community, and practical resources 
                to help you manage your journey with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/resources" 
                  className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
                >
                  Explore Resources
                </Link>
                <Link 
                  href="/community" 
                  className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg border border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                    💜
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">You Are Not Alone</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with others who understand your journey and access reliable information 
                    to help manage your condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive information and tools to help you understand and manage chronic invisible illnesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📋
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Symptoms Guide</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn about common symptoms of chronic invisible illnesses and how to recognize them in yourself and others.
              </p>
              <Link 
                href="/symptoms" 
                className="inline-block mt-6 text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                💊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Treatment Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore various management and treatment approaches for chronic invisible illnesses, 
                from lifestyle changes to medical interventions.
              </p>
              <Link 
                href="/treatments" 
                className="inline-block mt-6 text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🏥
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Conditions Library</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed information about specific chronic invisible illnesses, including causes, symptoms, 
                and management strategies.
              </p>
              <Link 
                href="/conditions" 
                className="inline-block mt-6 text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conditions We Cover</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Information and resources for a wide range of chronic invisible illnesses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🦋', name: 'Lupus' },
              { icon: '💨', name: 'Asthma' },
              { icon: '🌸', name: 'IBS' },
              { icon: '🦴', name: 'CRPS' },
              { icon: '🤯', name: 'Fibromyalgia' },
              { icon: '⚡', name: 'ME/CFS' },
              { icon: '🏃', name: 'Endometriosis' },
              { icon: '🧠', name: 'More Conditions' }
            ].map((condition, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center">
                <div className="text-3xl mb-3">{condition.icon}</div>
                <h3 className="font-semibold text-gray-900">{condition.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with others who understand your journey and share experiences
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-purple-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support & Understanding</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our supportive community where you can connect with others facing similar challenges, 
                  share experiences, and find encouragement.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Peer support groups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Community forums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Monthly virtual meetups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Resource sharing</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl mx-auto mb-6">
                  👥
                </div>
                <Link 
                  href="/community" 
                  className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey to Better Health</h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed">
            Whether you're seeking information, support, or a community that understands, 
            Chronic Haven is here to help you every step of the way.
          </p>
          <Link 
            href="/about" 
            className="inline-block px-10 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
