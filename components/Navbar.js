'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-sm">
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Carlytical</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/#how-it-works" className="hover:text-gray-900 transition-colors">How it works</Link>
            <Link href="/#compare" className="hover:text-gray-900 transition-colors">Compare</Link>
            <Link href="/#before-you-buy" className="hover:text-gray-900 transition-colors">Insurance</Link>
            <Link href="/#footer" className="hover:text-gray-900 transition-colors">About Us</Link>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors relative text-gray-500 hover:text-gray-700"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                <Link href="/dashboard" className="px-6 py-2 text-sm font-medium text-white bg-[#0066FF] rounded-lg hover:bg-blue-600 transition-colors">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="px-6 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="px-6 py-2 text-sm font-medium text-white bg-[#0066FF] rounded-lg hover:bg-blue-600 transition-colors">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
