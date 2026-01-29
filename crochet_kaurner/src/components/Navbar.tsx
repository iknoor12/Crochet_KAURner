'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

/** @jsxImportSource react */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream-100 shadow-soft">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-dusty-blue-700 to-muted-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="hidden sm:inline font-bold text-2xl text-gray-800 tracking-wide italic font-serif">
              The Crochet Kaurner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Basket Icon + Shop Now Button - Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative inline-flex items-center justify-center text-gray-700 hover:text-dusty-blue-600 transition-colors duration-200"
              aria-label="View basket"
            >
              <ShoppingCart size={24} />
              {getCartCount() > 0 && (
                <span className="absolute -top-3 -right-3 bg-dusty-blue-600 text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <Link
              href="/products"
              className="px-6 py-3 bg-slate-blue-800 text-white rounded-lg hover:bg-slate-blue-700 transition-colors duration-200 font-semibold"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/cart"
              className="relative inline-flex items-center justify-center text-gray-700 hover:text-dusty-blue-600 transition-colors duration-200"
              aria-label="View basket"
            >
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-3 -right-3 bg-dusty-blue-600 text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 w-8 h-8 focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-beige-300 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-dusty-blue-500 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/products"
              className="block w-full button-primary mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}