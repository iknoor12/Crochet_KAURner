'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

// Extended product data with categories
const allProducts = [
  // Wearables
  {
    id: '1',
    title: 'Cozy Chunky Knit Blanket',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 342,
    category: 'Wearables',
  },
  {
    id: '2',
    title: 'Soft Wool Winter Scarf',
    price: 45.99,
    rating: 4.7,
    reviewCount: 289,
    category: 'Wearables',
  },
  {
    id: '3',
    title: 'Warm Knitted Hat',
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviewCount: 156,
    category: 'Wearables',
  },
  {
    id: '4',
    title: 'Cozy Cable Knit Sweater',
    price: 79.99,
    rating: 4.6,
    reviewCount: 198,
    category: 'Wearables',
  },
  {
    id: '5',
    title: 'Elegant Winter Gloves',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviewCount: 234,
    category: 'Wearables',
  },

  // Home Decor
  {
    id: '6',
    title: 'Decorative Wall Hanging',
    price: 55.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviewCount: 124,
    category: 'Home Decor',
  },
  {
    id: '7',
    title: 'Rainbow Baby Blanket',
    price: 65.99,
    rating: 4.9,
    reviewCount: 401,
    category: 'Home Decor',
  },
  {
    id: '8',
    title: 'Soft Throw Pillow',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviewCount: 267,
    category: 'Home Decor',
  },
  {
    id: '9',
    title: 'Mandala Dreamcatcher',
    price: 59.99,
    rating: 4.6,
    reviewCount: 145,
    category: 'Home Decor',
  },
  {
    id: '10',
    title: 'Boho Macramé Tapestry',
    price: 72.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewCount: 201,
    category: 'Home Decor',
  },

  // Toys & Gifts
  {
    id: '11',
    title: 'Handmade Amigurumi Animals Set',
    price: 34.99,
    rating: 4.6,
    reviewCount: 218,
    category: 'Toys & Gifts',
  },
  {
    id: '12',
    title: 'Cute Amigurumi Dinosaur',
    price: 19.99,
    rating: 4.9,
    reviewCount: 287,
    category: 'Toys & Gifts',
  },
  {
    id: '13',
    title: 'Soft Bunny Stuffed Toy',
    price: 24.99,
    originalPrice: 35.99,
    rating: 4.7,
    reviewCount: 156,
    category: 'Toys & Gifts',
  },
  {
    id: '14',
    title: 'Rainbow Amigurumi Set',
    price: 44.99,
    rating: 4.8,
    reviewCount: 312,
    category: 'Toys & Gifts',
  },
  {
    id: '15',
    title: 'Baby Gift Bundle',
    price: 59.99,
    originalPrice: 84.99,
    rating: 4.9,
    reviewCount: 423,
    category: 'Toys & Gifts',
  },

  // Accessories
  {
    id: '16',
    title: 'Elegant Baby Booties',
    price: 24.99,
    originalPrice: 35.99,
    rating: 4.9,
    reviewCount: 156,
    category: 'Accessories',
  },
  {
    id: '17',
    title: 'Cozy Coffee Cup Cozy',
    price: 12.99,
    rating: 4.5,
    reviewCount: 89,
    category: 'Accessories',
  },
  {
    id: '18',
    title: 'Handmade Boho Bag',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviewCount: 267,
    category: 'Accessories',
  },
  {
    id: '19',
    title: 'Colorful Socks Pack',
    price: 22.99,
    rating: 4.6,
    reviewCount: 178,
    category: 'Accessories',
  },
  {
    id: '20',
    title: 'Chunky Knit Phone Pouch',
    price: 29.99,
    originalPrice: 42.99,
    rating: 4.8,
    reviewCount: 134,
    category: 'Accessories',
  },
];

const categories = [
  { id: 1, name: 'All Products', icon: '🎨' },
  { id: 2, name: 'Wearables', icon: '🧣' },
  { id: 3, name: 'Home Decor', icon: '🏠' },
  { id: 4, name: 'Toys & Gifts', icon: '🧸' },
  { id: 5, name: 'Accessories', icon: '👜' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All Products'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-r bg-dusty-blue-700">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            All Products
          </h1>
          <p className="text-lg text-cream-100">
            Browse our complete collection of handmade crochet items
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories Filter */}
            <aside className="lg:col-span-1">
              <div className="bg-cream-50 rounded-2xl p-6 shadow-soft sticky top-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Categories
                </h2>

                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-3 ${
                        selectedCategory === category.name
                          ? 'bg-gradient-to-r from-dusty-blue-500 to-muted-teal-600 text-white shadow-soft'
                          : 'bg-white text-gray-700 hover:bg-beige-100'
                      }`}
                    >
                      <span className="text-xl">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Product Count */}
                <div className="mt-8 p-4 bg-white rounded-lg border-2 border-beige-300">
                  <p className="text-sm text-gray-600">Showing</p>
                  <p className="text-3xl font-bold text-dusty-blue-600">
                    {filteredProducts.length}
                  </p>
                  <p className="text-sm text-gray-600">products</p>
                </div>
              </div>
            </aside>

            {/* Main Content - Products Grid */}
            <div className="lg:col-span-3">
              {/* Result Info */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCategory === 'All Products'
                    ? 'All Products'
                    : selectedCategory}
                </h2>
                <p className="text-gray-600 mt-2">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    No Products Found
                  </h3>
                  <p className="text-gray-600">
                    Sorry, we don't have any products in this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We create custom crochet pieces tailored to your preferences. Contact us to discuss your unique project!
          </p>
          <button className="inline-block px-8 py-3 bg-slate-blue-800 text-white rounded-lg font-bold text-lg hover:bg-slate-blue-700 transition-colors duration-200 shadow-soft hover:shadow-md">
            Request Custom Order
          </button>
        </div>
      </section>
    </>
  );
}
