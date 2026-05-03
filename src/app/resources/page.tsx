import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive information and tools to help you understand and manage chronic invisible illnesses
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our resources by category to find the information you need
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
                Explore various management and treatment approaches for chronic invisible illnesses, from lifestyle changes to medical interventions.
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
                Detailed information about specific chronic invisible illnesses, including causes, symptoms, and management strategies.
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

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fast access to popular resources and information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link 
              href="/symptoms" 
              className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center hover:bg-purple-100 transition-colors"
            >
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-semibold text-gray-900">Symptoms</h3>
            </Link>
            
            <Link 
              href="/treatments" 
              className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center hover:bg-purple-100 transition-colors"
            >
              <div className="text-3xl mb-3">💊</div>
              <h3 className="font-semibold text-gray-900">Treatments</h3>
            </Link>
            
            <Link 
              href="/conditions" 
              className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center hover:bg-purple-100 transition-colors"
            >
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900">Conditions</h3>
            </Link>
            
            <Link 
              href="/community" 
              className="bg-purple-50 rounded-xl p-6 border border-purple-100 text-center hover:bg-purple-100 transition-colors"
            >
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-900">Community</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recommended Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted resources for managing chronic invisible illnesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mr-4">
                  🏥
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Medical Resources</h3>
                  <p className="text-sm text-gray-500">Trusted medical information and resources</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Mayo Clinic</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <a href="https://www.webmd.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">WebMD</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <a href="https://www.nhs.uk" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">NHS</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mr-4">
                  👥
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Support Organizations</h3>
                  <p className="text-sm text-gray-500">Organizations that provide support and resources</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <a href="https://www.invisibleillnessweek.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Invisible Illness Week</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <a href="https://www.arthritis.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Arthritis Foundation</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">•</span>
                  <a href="https://www.lupus.org" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Lupus Foundation</a>
                </li>
              </ul>
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
              If you're looking for specific information or need help managing your condition, 
              we're here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-md"
              >
                Contact Us
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
