'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <nav className="px-4 py-2">
      <div className="container mx-auto flex items-center">
        <Link href="/" aria-label="Chronic Haven Home">
          <Image
            src="/logo.png"
            alt="Chronic Haven Logo"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </Link>
        <div className="hidden md:flex flex-1 justify-center ml-4">
          <ul className="flex gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="px-6 py-3 bg-purple-600 text-black rounded-full transition-all duration-300 font-bold text-lg md:text-xl shadow-md hover:bg-purple-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>
        <button
          className="md:hidden p-2 text-purple-600 ml-auto bg-purple-100 rounded-full hover:bg-purple-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm mt-2 pb-4 rounded-xl shadow-lg border border-purple-200 mx-2">
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
