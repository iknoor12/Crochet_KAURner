'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

/** @jsxImportSource react */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-900 text-gray-700 mt-16">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-terracotta-500 to-rust-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl text-gray-800">The Crochet Kaurner</span>
            </div>
            <p className="text-sm text-gray-600">
              Handmade crochet creations crafted with love and passion. Each piece tells a story.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center text-white hover:bg-terracotta-600 transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center text-white hover:bg-terracotta-600 transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center text-white hover:bg-terracotta-600 transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-terracotta-600 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-terracotta-600 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-terracotta-600 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-terracotta-600 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-terracotta-600 transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-terracotta-600 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-terracotta-600 transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-terracotta-600 transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-terracotta-600 transition-colors duration-200">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-terracotta-600 flex-shrink-0 mt-0.5" />
                <span>123 Craft Lane, Artisan City, AC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-terracotta-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-terracotta-600 transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-terracotta-600 flex-shrink-0" />
                <a href="mailto:hello@crochetkaurner.com" className="hover:text-terracotta-600 transition-colors duration-200">
                  hello@crochet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-beige-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-600">
                Get updates on new creations, special offers, and crochet tips delivered to your inbox.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-cream-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              />
              <button className="button-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-beige-700 bg-beige-800 py-6">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {currentYear} Crochet Kaurner. All rights reserved.</p>
          <p>Handcrafted with ❤️ and creativity</p>
        </div>
      </div>
    </footer>
  );
}
