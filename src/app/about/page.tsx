'use client';

import Link from 'next/link';

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Chronic Haven
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              A gentle space created with love for anyone navigating life with chronic invisible illnesses.
              <br />
              <span className="text-purple-600">You are not alone here.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-purple-200">
            <div className="text-center mb-8">
              <span className="text-4xl inline-block mb-4">💙</span>
              <h2 className="text-3xl font-bold text-gray-900">A Place Just for You</h2>
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
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources and support for managing chronic invisible illnesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📚
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information & Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access reliable information about various chronic invisible illnesses, symptoms, 
                treatments, and management strategies.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                👥
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with others who understand your journey, share experiences, 
                and find support in our community forums and groups.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                💊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Treatment Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore various management and treatment approaches, from lifestyle changes 
                to medical interventions.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📖
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog & Articles</h3>
              <p className="text-gray-600 leading-relaxed">
                Read personal stories, expert advice, and practical tips for living with 
                chronic invisible illnesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed">
              Our mission is to create a safe, supportive, and informative space for individuals 
              living with chronic invisible illnesses. We believe that everyone deserves to be 
              seen, heard, and supported on their health journey.
            </p>
            <Link 
              href="/resources" 
              className="inline-block px-10 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're seeking information, support, or simply want to connect with others 
              who understand, you're welcome here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/community" 
                className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
              >
                Join Our Community
              </Link>
              <Link 
                href="/resources" 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg border border-purple-300 hover:bg-purple-50 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
