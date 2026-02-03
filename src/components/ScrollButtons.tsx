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
        className="flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-purple-600 rounded-full font-semibold shadow-md hover:bg-purple-100 transition-all"
        aria-label="Back to Home"
      >
        <span>🏠</span>
        <span>Home</span>
      </Link>
      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-purple-600 rounded-full font-semibold shadow-md hover:bg-purple-100 transition-all"
          aria-label="Back to Top"
        >
          <span>⬆️</span>
          <span>Top</span>
        </button>
      )}
    </div>
  );
}
