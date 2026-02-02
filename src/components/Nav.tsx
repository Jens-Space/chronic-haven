'use client';

import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/conditions', label: 'Conditions' },
    { href: '/symptoms', label: 'Symptoms' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/resources', label: 'Resources' },
    { href: '/community', label: 'Community' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-white to-purple-100 px-4 py-4 shadow-md rounded-b-2xl border-b border-purple-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <svg 
            className="w-10 h-10 text-purple-500 drop-shadow-sm" 
            viewBox="0 0 40 40" 
            fill="currentColor"
          >
            <path d="M20 35.5C20 35.5 5 24.5 5 14.5C5 8.5 9.5 4 15.5 4C18.5 4 21 5.5 22.5 7.5C24 5.5 26.5 4 29.5 4C35.5 4 40 8.5 40 14.5C40 24.5 25 35.5 25 35.5H20Z" />
          </svg>
          <span className="text-xl font-semibold text-purple-800 drop-shadow-sm">
            Chronic Haven
          </span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="px-4 py-2 text-purple-700 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300 font-medium text-base md:text-lg shadow-sm hover:shadow-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden p-2 text-purple-600 absolute top-4 right-4 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm mt-3 pb-4 rounded-xl shadow-lg border border-purple-200 mx-2">
          <ul className="space-y-2 px-2 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="block py-3 px-4 text-purple-700 hover:text-white hover:bg-purple-500 rounded-lg transition-all duration-300 font-medium text-lg" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
