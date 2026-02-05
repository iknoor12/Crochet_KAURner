'use client';

import Link from 'next/link';
import { Heart, Sparkles, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-dusty-blue-100 to-muted-teal-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About The Crochet Kaurner
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Where creativity meets craftsmanship, one stitch at a time
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Welcome to The Crochet Kaurner, where every piece tells a story of passion, 
                dedication, and timeless craftsmanship. Founded with a love for the art of 
                crochet, we've been creating handmade treasures that bring warmth and joy to 
                homes around the world.
              </p>
              <p>
                What started as a personal hobby has blossomed into a vibrant business, driven 
                by the belief that handmade items carry a special kind of magic. Each stitch 
                is carefully crafted with premium yarns and materials, ensuring that every 
                product is not just beautiful, but built to last.
              </p>
              <p>
                At The Crochet Kaurner, we believe in slow fashion and sustainable practices. 
                Every item is made to order, reducing waste and ensuring that you receive 
                something truly unique and special. From cozy blankets to adorable amigurumi, 
                our creations are made with love and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dusty-blue-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-dusty-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Made with Love</h3>
              <p className="text-gray-600">
                Every piece is handcrafted with care and attention to detail, ensuring quality 
                and uniqueness.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted-teal-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-muted-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium yarns and materials to create products that are soft, 
                durable, and beautiful.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-slate-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600">
                We're more than a shop—we're a community of crochet lovers sharing tips, 
                patterns, and inspiration.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dusty-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-dusty-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Craft</h3>
              <p className="text-gray-600">
                Made-to-order production and eco-friendly materials help us minimize waste 
                and protect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Maker Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Meet the Maker
            </h2>
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-dusty-blue-500 to-muted-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">CK</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  The Crochet Kaurner Team
                </h3>
                <p className="text-dusty-blue-600 font-medium">Artisan & Creator</p>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>
                  Behind every creation is a passionate team of crochet enthusiasts dedicated to 
                  bringing your vision to life. With years of experience and a deep love for the 
                  craft, we pour our hearts into every stitch.
                </p>
                <p>
                  When we're not crocheting, you can find us experimenting with new patterns, 
                  sourcing the softest yarns, and dreaming up new designs that will make your 
                  space feel like home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-dusty-blue-600 to-slate-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-dusty-blue-100 max-w-2xl mx-auto">
            Explore our collection of handmade crochet creations and find something special 
            for your home or as a gift for someone you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-dusty-blue-700 rounded-lg hover:bg-cream-50 transition-colors duration-200 font-semibold text-lg"
            >
              Shop Our Collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-dusty-blue-700 transition-colors duration-200 font-semibold text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
