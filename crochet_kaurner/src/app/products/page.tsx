'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { productCatalog } from '@/data/products';

const allProducts = productCatalog;

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
      <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-r bg-dusty-blue-700">
        <div className="container-custom">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            All Products
          </h1>
          <p className="text-base sm:text-lg text-cream-100">
            Browse our complete collection of handmade crochet items
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories Filter */}
            <aside className="lg:col-span-1">
              <div className="bg-cream-50 rounded-2xl p-4 sm:p-6 shadow-soft lg:sticky lg:top-20">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Categories
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-2 sm:gap-3 ${
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
                <div className="mt-6 sm:mt-8 p-4 bg-white rounded-lg border-2 border-beige-300">
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
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
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
