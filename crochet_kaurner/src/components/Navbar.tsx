'use client';

import { useState } from 'react';
import Link from 'next/link';

/** @jsxImportSource react */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream-100 shadow-soft">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-terracotta-500 to-rust-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl text-gray-800">
              Crochet Kaurner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden sm:block button-primary">
            Shop Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-beige-300 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-terracotta-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full button-primary mt-4">
              Shop Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
