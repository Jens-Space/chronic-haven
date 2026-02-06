'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Register service worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered:', registration.scope);
          })
          .catch((error) => {
            console.log('SW registration failed:', error);
          });
      });
    }
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/conditions', label: 'Conditions' },
    { href: '/symptoms', label: 'Symptoms' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/resources', label: 'Resources' },
    { href: '/community', label: 'Community' },
    { href: '/feedback', label: 'Feedback' },
  ];

  const isFirefox = typeof navigator !== 'undefined' && /Firefox/i.test(navigator.userAgent);

  const handleAddToHomeScreen = () => {
    // Show instructions based on browser
    if (isFirefox) {
      alert('To install on Firefox:\n\n1. Tap the menu button (⋮)\n2. Tap "Install" or "Add to Home Screen"\n\nIf you don\'t see this option, try:\nSettings → "Install Chronic Haven"');
    } else {
      alert('To install:\n\n1. Tap the menu button (⋮)\n2. Tap "Add to Home Screen" or "Install App"');
    }
  };

  return (
    <nav className="px-4 py-2 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center mb-3 lg:mb-0">
          <Link href="/" aria-label="Chronic Haven Home">
            <Image
              src="/chronic-haven/logo.png"
              alt="Chronic Haven Logo"
              width={500}
              height={500}
              className="object-contain cursor-pointer hover:opacity-90 transition-opacity"
              style={{ width: '300px', height: 'auto' }}
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
          <div className="hidden lg:flex gap-1">
            <ul className="flex gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 bg-white text-black border-2 border-purple-600 rounded-full transition-all duration-300 font-semibold text-base md:text-lg shadow-md hover:bg-purple-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={handleAddToHomeScreen}
              className="px-4 py-2 bg-purple-600 text-white border-2 border-purple-600 rounded-full transition-all duration-300 font-semibold text-base md:text-lg shadow-md hover:bg-purple-700"
              title="Add to Home Screen"
            >
              📱 Add to Home Screen
            </button>
          </div>
          <button
            className="lg:hidden p-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm mt-2 pb-4 rounded-xl shadow-lg border border-purple-200 mx-2">
            <ul className="space-y-2 px-2 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 bg-white text-black border border-purple-300 hover:text-purple-900 hover:bg-purple-100 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleAddToHomeScreen();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 px-4 bg-purple-600 text-white border border-purple-600 rounded-lg transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2"
                >
                  📱 Add to Home Screen
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
