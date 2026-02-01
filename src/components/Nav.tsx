'use client';

import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/symptoms', label: 'Symptoms' },
    { href: '/treatments', label: 'Treatments' },
    { href: '/resources', label: 'Resources' },
    { href: '/chatbot', label: 'AI Chat' },
  ];

  return (
    <nav className="bg-white px-4 py-5 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <Link href="/" className="flex items-center gap-2 hover:text-purple-600 transition-colors group">
          <svg 
            className="w-10 h-10 text-purple-500 group-hover:text-purple-600 transition-colors" 
            viewBox="0 0 40 40" 
            fill="currentColor"
          >
            <path d="M20 35.5C20 35.5 5 24.5 5 14.5C5 8.5 9.5 4 15.5 4C18.5 4 21 5.5 22.5 7.5C24 5.5 26.5 4 29.5 4C35.5 4 40 8.5 40 14.5C40 24.5 25 35.5 25 35.5H20Z" />
          </svg>
          <span className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
            Fibro Support Hub
          </span>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-700 hover:text-purple-600 transition-colors font-bold text-base md:text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden p-2 text-gray-600 absolute top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white mt-3 pb-3 border-t border-gray-100">
          <ul className="space-y-2 px-2 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="block py-2 text-gray-700 font-bold text-lg" 
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
