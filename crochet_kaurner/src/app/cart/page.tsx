'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Trash2, ShoppingCart } from 'lucide-react';

/** @jsxImportSource react */

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen bg-cream-50 py-16 lg:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 italic font-serif">
            Your Basket
          </h1>
          <p className="text-lg text-gray-600">
            Review your selected items and proceed to checkout
          </p>
        </div>

        {items.length === 0 ? (
          // Empty Cart State
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-cream-100 flex items-center justify-center mb-6">
              <ShoppingCart size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your basket is empty</h2>
            <p className="text-gray-600 mb-8">
              Start adding some beautiful crochet items to your basket!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-blue-800 text-white rounded-lg hover:bg-slate-blue-700 transition-colors duration-200 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-soft p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Items in Basket ({items.length})
                  </h2>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 p-4 border border-beige-200 rounded-xl hover:border-dusty-blue-300 transition-colors"
                    >
                      {/* Product Image */}
                      <div className="sm:w-24 sm:h-24 w-full h-40 rounded-lg bg-cream-100 overflow-hidden flex items-center justify-center flex-shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-4xl">🧶</span>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-dusty-blue-600 font-semibold">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-4">
                          <label className="text-sm font-medium text-gray-700">
                            Quantity:
                          </label>
                          <div className="flex items-center gap-2 border border-beige-300 rounded-lg">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, Math.max(1, item.quantity - 1))
                              }
                              className="px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="px-4 py-1 font-semibold text-gray-800 min-w-12 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Total & Remove */}
                      <div className="flex flex-col items-end justify-between sm:w-32">
                        <div className="text-right">
                          <p className="text-xs text-gray-500 mb-1">Subtotal</p>
                          <p className="text-2xl font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors font-semibold text-sm mt-4"
                          aria-label={`Remove ${item.title}`}
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Clear Cart Button */}
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="mt-6 w-full px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                  >
                    Clear Entire Basket
                  </button>
                )}
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-soft p-6 h-fit sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-beige-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({items.length} items)</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-semibold">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-3xl font-bold text-dusty-blue-600">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <button className="w-full px-4 py-3 bg-slate-blue-800 text-white rounded-lg hover:bg-slate-blue-700 transition-colors duration-200 font-semibold mb-3">
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  className="block text-center px-4 py-3 border border-beige-300 text-gray-700 rounded-lg hover:bg-cream-50 transition-colors duration-200 font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
