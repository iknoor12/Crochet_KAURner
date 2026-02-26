'use client';

import { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatINR } from '@/utils/currency';

/** @jsxImportSource react */

interface ProductCardProps {
  id: string;
  image?: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount?: number;
  onWishlist?: () => void;
}

export default function ProductCard({
  id,
  image,
  title,
  price,
  originalPrice,
  rating,
  reviewCount = 0,
  onWishlist,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image }, 1);
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist?.();
  };

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  // Render star rating
  const renderStars = () => {
    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : i < rating
                    ? 'fill-yellow-200 text-yellow-200'
                    : 'fill-gray-200 text-gray-200'
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {rating.toFixed(1)}
          {reviewCount > 0 && <span className="text-gray-500 ml-1">({reviewCount})</span>}
        </span>
      </div>
    );
  };

  return (
    <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        {/* Image */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-beige-100 to-cream-100">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <svg
                className="w-16 h-16 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Product Image</span>
            </div>
          )}
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
            -{discountPercentage}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart
            size={20}
            className={`transition-colors duration-200 ${
              isWishlisted
                ? 'fill-dusty-blue-500 text-dusty-blue-500'
                : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 hover:text-dusty-blue-500 transition-colors cursor-pointer">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex-shrink-0">{renderStars()}</div>

        {/* Price Section */}
        <div className="flex items-baseline gap-2">
          <span className="text-base sm:text-lg font-bold text-gray-900">
            {formatINR(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              {formatINR(originalPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-dusty-blue-500 to-muted-teal-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:from-dusty-blue-600 hover:to-muted-teal-600 transition-all duration-200 disabled:opacity-75 shadow-soft hover:shadow-md"
        >
          <ShoppingCart size={18} />
          <span>{isAddingToCart ? 'Added!' : 'Add to Cart'}</span>
        </button>

        {/* In Stock Badge */}
        <div className="text-center text-xs text-green-600 font-medium">
          In Stock
        </div>
      </div>
    </div>
  );
}
