import Link from 'next/link';

export default function Community() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Community
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with others who understand your journey and share experiences
            </p>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-purple-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Support & Understanding</h2>
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

      {/* Community Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Guidelines</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our community is built on respect, kindness, and understanding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Respect & Kindness</h3>
              <p className="text-gray-600 leading-relaxed">
                Treat others with respect and kindness. Everyone's experience is valid and unique.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🔒
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Respect the privacy of others. Do not share personal information without permission.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📚
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep discussions safe and constructive. If you're in crisis, please seek professional help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from real people in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg mr-4">
                  👩
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah</h4>
                  <p className="text-sm text-gray-500">Living with Lupus</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "This community has been a lifesaver. I finally feel understood and supported."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg mr-4">
                  👨
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael</h4>
                  <p className="text-sm text-gray-500">Living with Fibromyalgia</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "The resources and support here have helped me manage my symptoms better."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us Today</h2>
            <p className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed">
              Join our supportive community and connect with others who understand your journey.
            </p>
            <Link 
              href="/community" 
              className="inline-block px-10 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
