'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Register service worker
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/chronic-haven/sw.js')
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

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          .website-logo {
            width: 400px !important;
          }
        }
      `}</style>
      <nav className="px-4 py-2 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center mb-3 lg:mb-0">
            <Link href="/" aria-label="Chronic Haven Home">
              <img
                src="/chronic-haven/logo.png"
                alt="Chronic Haven Logo"
                className="website-logo cursor-pointer hover:opacity-90 transition-opacity"
                style={{ width: '200px', height: 'auto', display: 'block' }}
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
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
