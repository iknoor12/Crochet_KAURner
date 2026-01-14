'use client';

import ProductCard from '@/components/ProductCard';

// Mock product data
const bestSellingProducts = [
  {
    id: '1',
    title: 'Cozy Chunky Knit Blanket',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 342,
  },
  {
    id: '2',
    title: 'Handmade Amigurumi Animals Set',
    price: 34.99,
    rating: 4.6,
    reviewCount: 218,
  },
  {
    id: '3',
    title: 'Elegant Baby Booties',
    price: 24.99,
    originalPrice: 35.99,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: '4',
    title: 'Soft Wool Winter Scarf',
    price: 45.99,
    rating: 4.7,
    reviewCount: 289,
  },
  {
    id: '5',
    title: 'Decorative Wall Hanging',
    price: 55.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: '6',
    title: 'Rainbow Baby Blanket',
    price: 65.99,
    rating: 4.9,
    reviewCount: 401,
  },
  {
    id: '7',
    title: 'Cozy Coffee Cup Cozy',
    price: 12.99,
    rating: 4.5,
    reviewCount: 89,
  },
  {
    id: '8',
    title: 'Handmade Boho Bag',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviewCount: 267,
  },
];

const categories = [
  {
    id: 1,
    name: 'Wearables',
    description: 'Cozy scarves, hats, and sweaters',
    icon: '🧣',
    color: 'from-softPastel-peach',
  },
  {
    id: 2,
    name: 'Home Decor',
    description: 'Blankets, pillows, and wall art',
    icon: '🏠',
    color: 'from-softPastel-lavender',
  },
  {
    id: 3,
    name: 'Toys & Gifts',
    description: 'Cute amigurumi and toys',
    icon: '🧸',
    color: 'from-softPastel-mint',
  },
  {
    id: 4,
    name: 'Accessories',
    description: 'Bags, socks, and more',
    icon: '👜',
    color: 'from-softPastel-butter',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-dusty-blue-300 to-cream-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 z-10">
              <div className="space-y-4">
                <p className="text-dusty-blue-600 font-semibold text-2xl uppercase tracking-wide italic font-serif">
                  Welcome to The Crochet Kaurner
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight italic font-serif">
                  Handmade With{' '}
                  <span className="bg-gradient-to-r from-dusty-blue-600 to-muted-teal-500 bg-clip-text text-transparent">
                    Love & Passion
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Discover beautifully crafted crochet pieces that bring warmth and
                  artistry into your home. Each creation is made with care and attention to detail.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 py-3 bg-slate-blue-800 text-white rounded-lg hover:bg-slate-blue-700 transition-colors duration-200 text-lg font-semibold">
                  Shop Now
                </button>
                <button className="px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold">
                  Learn Our Story
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-beige-300">
                <div>
                  <p className="text-3xl font-bold text-dusty-blue-800">500+</p>
                  <p className="text-m text-gray-600">Creations Made</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-dusty-blue-800">800+</p>
                  <p className="text-m text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-dusty-blue-800">5★</p>
                  <p className="text-m text-gray-600">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-dusty-blue-200 to-muted-teal-200 rounded-3xl shadow-soft-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-dusty-blue-200 to-cream-100 rounded-3xl shadow-soft opacity-50"></div>
              <div className="absolute inset-8 bg-cream-100 rounded-2xl flex items-center justify-center text-gray-400 text-center p-8">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🧶</span>
                  <span className="text-xl font-medium">Handmade Crochet Items</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-softPastel-lavender rounded-full opacity-20 -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-softPastel-mint rounded-full opacity-20 -z-10 blur-3xl"></div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Featured Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore our curated collection of handmade crochet products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer h-full"
              >
                <div
                  className={`bg-gradient-to-br ${category.color} to-cream-100 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center items-center text-center`}
                >
                  <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                  <div className="mt-6 text-dusty-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-dusty-blue-500 font-semibold text-lg uppercase tracking-wide mb-2">
              Our Best Sellers
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Customer Favorites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the products our customers love most. Each piece is carefully handcrafted
              to bring joy and warmth to your home.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-dusty-blue-500 to-muted-teal-500 text-white rounded-lg font-bold text-lg hover:from-dusty-blue-600 hover:to-muted-teal-600 transition-all duration-200 shadow-soft hover:shadow-md">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Our Creations?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each piece is a testament to our dedication to quality, creativity, and love for the craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-blue-500 to-slate-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🧵
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Handcrafted</h3>
              <p className="text-gray-600 text-sm">
                Every stitch is made by hand with precision and care.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-blue-500 to-slate-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🌿
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Materials</h3>
              <p className="text-gray-600 text-sm">
                We use premium yarns and eco-friendly materials.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-blue-500 to-slate-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                💎
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Unique Designs</h3>
              <p className="text-gray-600 text-sm">
                Custom designs that reflect your personal style.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-blue-500 to-slate-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">
                Carefully packaged and shipped worldwide quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-blue-500 to-slate-blue-600">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Find Your Perfect Crochet Piece?
          </h2>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto">
            Browse our complete collection and discover something truly special today.
          </p>
          <button className="inline-block px-8 py-4 bg-white text-dusty-blue-500 rounded-lg font-bold text-lg hover:bg-cream-50 transition-colors duration-200 shadow-soft hover:shadow-md">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}
