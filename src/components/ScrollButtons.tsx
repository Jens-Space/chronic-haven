'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ScrollButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Link
        href="/"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-110"
        aria-label="Back to Home"
      >
        <span className="text-2xl">🏠</span>
      </Link>
      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-110 animate-bounce"
          aria-label="Back to Top"
        >
          <span className="text-2xl">⬆️</span>
        </button>
      )}
    </div>
  );
}
