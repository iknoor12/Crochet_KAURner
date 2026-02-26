'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

/** @jsxImportSource react */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-500 text-gray-700 mt-12 sm:mt-16">
      {/* Main Footer Content */}
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-dusty-blue-500 to-muted-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-gray-800">The Crochet Kaurner</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Handmade crochet creations crafted with love and passion. Each piece tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-dusty-blue-500 transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-dusty-blue-500 transition-colors duration-200">
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
                <MapPin size={18} className="text-slate-blue-500 flex-shrink-0 mt-0.5" />
                <span>Hanumangarh, Rajasthan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-slate-blue-500 flex-shrink-0" />
                <a href="tel:+91 96605-29835" className="hover:text-dusty-blue-500 transition-colors duration-200 break-all">
                  +91 96605-29835
                </a>
              </li>
              {/* Social Links */}
              <li className="flex gap-4 pt-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-slate-blue-500 rounded-full flex items-center justify-center text-white hover:bg-slate-blue-600 transition-colors duration-200"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-slate-blue-500 rounded-full flex items-center justify-center text-white hover:bg-slate-blue-600 transition-colors duration-200"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-slate-blue-500 rounded-full flex items-center justify-center text-white hover:bg-slate-blue-600 transition-colors duration-200"
                >
                  <Twitter size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-beige-700 bg-beige-700 py-6">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {currentYear} Crochet Kaurner. All rights reserved.</p>
          <p>Handcrafted with ❤️ and creativity</p>
        </div>
      </div>
    </footer>
  );
}
