'use client';

import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-400 to-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-teal-100 transition-colors flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          Fibro Support Hub
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-teal-100 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-teal-100 transition-colors">About</Link></li>
          <li><Link href="/symptoms" className="hover:text-teal-100 transition-colors">Symptoms</Link></li>
          <li><Link href="/treatments" className="hover:text-teal-100 transition-colors">Treatments</Link></li>
          <li><Link href="/resources" className="hover:text-teal-100 transition-colors">Resources</Link></li>
          <li><Link href="/chatbot" className="hover:text-teal-100 transition-colors">AI Chat</Link></li>
          <li><Link href="/feedback" className="hover:text-teal-100 transition-colors">Feedback</Link></li>
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-teal-400 to-blue-500 mt-4 pb-4">
          <ul className="flex flex-col space-y-2 px-4">
            <li><Link href="/" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/symptoms" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>Symptoms</Link></li>
            <li><Link href="/treatments" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>Treatments</Link></li>
            <li><Link href="/resources" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>Resources</Link></li>
            <li><Link href="/chatbot" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>AI Chat</Link></li>
            <li><Link href="/feedback" className="block hover:text-teal-100 transition-colors" onClick={() => setIsOpen(false)}>Feedback</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;