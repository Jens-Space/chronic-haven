'use client';

import FeedbackForm from '@/components/FeedbackForm';
import Link from 'next/link';

export default function FeedbackPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <FeedbackForm />

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-6">
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
