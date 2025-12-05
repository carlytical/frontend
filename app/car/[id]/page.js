'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/lib/features/cart/cartSlice';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import SpecsAccordion from '@/components/SpecsAccordion';
import { cars } from '@/data/cars';
import { FaArrowLeft, FaGasPump, FaRoad, FaMoneyBillWave, FaShieldAlt, FaLock, FaCheckCircle, FaShoppingCart, FaExchangeAlt } from 'react-icons/fa';

export default function CarDetailPage() {
    const params = useParams();
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [isCompared, setIsCompared] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Get car by ID
    const car = cars.find(c => c.id.toString() === params?.id);

    // Check if car is in cart
    const isInCart = cartItems.some((item) => item.id === car?.id);

    const handleAddToCart = () => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login if not authenticated
            router.push('/login');
            return;
        }

        if (!isInCart && car) {
            dispatch(addToCart(car));
        }
    };

    if (!car) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h1>
                    <Link href="/search" className="text-blue-600 hover:text-blue-700 font-medium">
                        Return to search results
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container-custom py-8">
                {/* Back Navigation */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6"
                >
                    <FaArrowLeft className="w-4 h-4" />
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Images */}
                    <div>
                        <ImageGallery images={car.images} alt={car.name} />
                    </div>

                    {/* Right Column - Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                        <p className="text-gray-600 mb-6">1.2 TFSI Sport Euro 5 (s/s) 2dr</p>

                        {/* Key Specs Badges */}
                        <div className="flex items-center gap-4 mb-6 flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                                <FaRoad className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-900">67,788ml</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                                <FaGasPump className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-900">Petrol</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                                <FaMoneyBillWave className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-900">£1045/yr</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {showFullDescription ? car.description : `${car.description.substring(0, 100)}...`}
                                {!showFullDescription && (
                                    <button
                                        onClick={() => setShowFullDescription(true)}
                                        className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                                    >
                                        Read more...
                                    </button>
                                )}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="text-4xl font-bold text-gray-900 mb-1">{car.fullPrice}</div>
                            <div className="text-sm text-green-600">{car.marketComparison}</div>
                        </div>

                        {/* Estimated Yearly Cost */}
                        <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-3">Estimated Yearly Cost</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm">
                                    <FaGasPump className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Fuel</span>
                                    <span className="ml-auto font-medium text-gray-900">{car.estimatedYearlyCost.fuel}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaShieldAlt className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Insurance</span>
                                    <span className="ml-auto font-medium text-gray-900">{car.estimatedYearlyCost.insurance}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaShieldAlt className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Insurance</span>
                                    <span className="ml-auto font-medium text-gray-900">{car.estimatedYearlyCost.insuranceAlt}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <FaLock className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Security</span>
                                    <span className="ml-auto font-medium text-gray-900">{car.estimatedYearlyCost.security}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm col-span-2">
                                    <FaCheckCircle className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Warranty</span>
                                    <span className="ml-auto font-medium text-gray-900">{car.estimatedYearlyCost.warranty}</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 mb-8">
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isCompared}
                                    onChange={(e) => setIsCompared(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                Add to Compare
                            </label>
                            <button
                                onClick={handleAddToCart}
                                disabled={isInCart}
                                className={`flex-1 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${isInCart
                                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                        : 'bg-[#0066FF] text-white hover:bg-blue-600'
                                    }`}
                            >
                                <FaShoppingCart className="w-5 h-5" />
                                {isInCart ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>

                        {/* Specs & Features */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Specs & Features</h2>
                            <SpecsAccordion specs={car.specs} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
