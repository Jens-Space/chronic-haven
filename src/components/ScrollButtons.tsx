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
        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md"
        aria-label="Back to Home"
      >
        🏠 Home
      </Link>
      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md"
          aria-label="Back to Top"
        >
          ⬆️ Top
        </button>
      )}
    </div>
  );
}
