import Link from 'next/link';

export default function Feedback() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-purple-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Feedback
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We value your feedback and suggestions to improve our website and services
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-purple-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-3xl mx-auto mb-4">
                📝
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us Your Feedback</h2>
              <p className="text-gray-600 mb-6">
                Your feedback helps us improve our website and services. We appreciate your time and input.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Feedback subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your feedback..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Feedback Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Ways to Provide Feedback</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We welcome feedback through various channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                💬
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Feedback</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join our community forums to share your feedback and suggestions with other members.
              </p>
              <Link 
                href="/community" 
                className="inline-block text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Join Community
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                📧
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Feedback</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Send us an email with your feedback and suggestions.
              </p>
              <a 
                href="mailto:feedback@chronichaven.com" 
                className="inline-block text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                feedback@chronichaven.com
              </a>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-6">
                🐦
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Follow us on social media and share your feedback with us there.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Thank You for Your Feedback</h2>
            <p className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed">
              Your feedback helps us improve our website and services for everyone.
            </p>
            <Link 
              href="/" 
              className="inline-block px-10 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
