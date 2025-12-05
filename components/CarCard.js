'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@/lib/features/cart/cartSlice';
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart, FaShoppingCart, FaTimes } from 'react-icons/fa';

export default function CarCard({ car }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.some((item) => item.id === car.id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isCompared, setIsCompared] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    // Auto-hide overlay after 3 seconds when item is added to cart
    useEffect(() => {
        if (isInCart) {
            setShowOverlay(true);
            const timer = setTimeout(() => {
                setShowOverlay(false);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setShowOverlay(false);
        }
    }, [isInCart]);

    const handleAddToCart = () => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login if not authenticated
            router.push('/login');
            return;
        }

        if (!isInCart) {
            dispatch(addToCart(car));
        }
    };

    const handleRemoveFromCart = (e) => {
        e.stopPropagation();
        dispatch(removeFromCart(car.id));
    };

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            {/* Image Carousel */}
            <div className="relative aspect-[16/10] bg-gray-100 group">
                <img
                    src={car.images[currentImageIndex]}
                    alt={car.name}
                    className="w-full h-full object-cover"
                />

                {/* Added to Cart Overlay */}
                {showOverlay && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-opacity">
                        <div className="bg-[#10B981] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transform scale-100 animate-in fade-in zoom-in duration-200">
                            <span className="text-sm font-medium">Added to Cart</span>
                        </div>
                    </div>
                )}

                {/* Navigation Arrows */}
                {car.images.length > 1 && !showOverlay && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                        >
                            <FaChevronLeft className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                        >
                            <FaChevronRight className="w-4 h-4 text-gray-700" />
                        </button>
                    </>
                )}

                {/* Image Dots */}
                {car.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {car.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentImageIndex ? 'bg-blue-600' : 'bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-5">
                {/* Title & Verified Badge */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                            {car.name} ({car.year})
                        </h3>
                    </div>
                    {car.verified && (
                        <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-medium rounded uppercase tracking-wide">
                            Verified
                        </span>
                    )}
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-2 gap-x-4 mb-6">
                    {/* Left: Main Price */}
                    <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">£{car.price.toLocaleString()}</div>
                        <div className="text-[10px] text-gray-400">Est. yearly cost: £994</div>
                    </div>

                    {/* Right: Finance Options */}
                    <div className="flex justify-between gap-4">
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">PCP</div>
                            <div className="text-sm font-semibold text-gray-900">{car.pcp || '£24,480'}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">HP</div>
                            <div className="text-sm font-semibold text-gray-900">{car.hp || '£31,480'}</div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 cursor-pointer transition-colors">
                        <input
                            type="checkbox"
                            checked={isCompared}
                            onChange={(e) => setIsCompared(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        Compare
                    </label>
                    <button
                        onClick={handleAddToCart}
                        disabled={isInCart}
                        className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${isInCart
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-[#0066FF] text-white hover:bg-blue-600'
                            }`}
                    >
                        <FaShoppingCart className="w-4 h-4" />
                        {isInCart ? 'Added' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}
