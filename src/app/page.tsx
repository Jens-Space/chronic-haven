import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Fibro Support Hub</h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Your comprehensive resource for understanding, managing, and finding community support for fibromyalgia.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <Link href="/symptoms" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-teal-100 hover:border-teal-200 cursor-pointer block">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-teal-600 text-2xl">ℹ️</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Learn About Symptoms</h2>
          <p className="text-gray-600">Understand the signs and symptoms of fibromyalgia.</p>
        </Link>
        <Link href="/treatments" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-teal-100 hover:border-teal-200 cursor-pointer block">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 text-2xl">💊</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Explore Treatments</h2>
          <p className="text-gray-600">Discover various treatment options and management strategies.</p>
        </Link>
        <Link href="/resources" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-teal-100 hover:border-teal-200 cursor-pointer block">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-purple-600 text-2xl">📚</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Find Resources</h2>
          <p className="text-gray-600">Access links to support organizations and helpful information.</p>
        </Link>
      </div>
    </div>
  );
}
