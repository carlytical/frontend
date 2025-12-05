'use client';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardSidebar from '@/components/DashboardSidebar';
import CarCard from '@/components/CarCard';
import CartDrawer from '@/components/CartDrawer';
import { cars } from '@/data/cars';
import { FiSearch, FiShoppingCart, FiBell, FiX, FiFilter } from 'react-icons/fi';
import { LuCarFront, LuGitCompare, LuTruck, LuPoundSterling } from 'react-icons/lu';

export default function DashboardPage() {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Get cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    // Filter cars based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        const filtered = cars.filter(car =>
            car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
    }, [searchQuery]);

    const stats = [
        { label: 'SAVED CARS', value: '10', icon: LuCarFront },
        { label: 'ACTIVE COMPARISON', value: '10', icon: LuGitCompare },
        { label: 'PENDING DELIVERY', value: '10', icon: LuTruck },
        { label: 'TOTAL ESTIMATED SAVINGS', value: '$1250', icon: LuPoundSterling },
    ];

    const comparisonCars = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400',
            brand: 'Abarth',
            model: '595C',
            variant: '70th Anniversary 1.4 T-Jet 145',
            price: '£20,950',
            purchasePrice: '£20,950',
            runningCost: '£1075/mo',
            financeType: 'PCP',
            fuel: '£450/mo',
            insurance: '£105/mo',
            maintenance: '£200/mo',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400',
            brand: 'Alfa Romeo',
            model: 'Giulia',
            variant: 'Lusso Ti 2.0 TB Auto',
            price: '£20,950',
            purchasePrice: '£20,950',
            runningCost: '£1075/mo',
            financeType: 'PCP',
            fuel: '£450/mo',
            insurance: '£105/mo',
            maintenance: '£200/mo',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400',
            brand: 'Alfa Romeo',
            model: 'Giulia',
            variant: 'Lusso Ti 2.0 TB Auto',
            price: '£20,950',
            purchasePrice: '£20,950',
            runningCost: '£1075/mo',
            financeType: 'PCP',
            fuel: '£450/mo',
            insurance: '£105/mo',
            maintenance: '£200/mo',
        },
    ];

    const filterChips = [
        { label: 'Abarth', active: true },
        { label: '124 Spider', active: true },
        { label: 'Up to 2025', active: true },
        { label: 'Price', active: false },
        { label: 'Mileage', active: false },
        { label: 'Location', active: false },
    ];

    return (
        <ProtectedRoute>
            <div className="flex min-h-screen bg-white font-sans">
                <DashboardSidebar />

                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    {/* Header */}
                    <div className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 shrink-0">
                        <div className="flex items-center justify-between">
                            <div className="flex-1 max-w-xl">
                                <div className="relative">
                                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search Cars"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-0 focus:bg-gray-100 transition-colors"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <FiX className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-5 ml-6">
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
                                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors relative text-gray-500 hover:text-gray-700">
                                    <FiBell className="w-5 h-5" />
                                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>
                                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
                                    <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                        {/* User Avatar */}
                                        <span className="text-white font-medium text-sm">
                                            {user?.firstName?.charAt(0) || 'U'}
                                        </span>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="text-sm font-semibold text-gray-900 leading-none mb-1">
                                            {user ? `${user.firstName} ${user.lastName}` : 'User'}
                                        </div>
                                        <div className="text-xs text-gray-500 leading-none">{user?.email || ''}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 overflow-y-auto p-8">
                        {searchQuery ? (
                            // Search View
                            <div className="max-w-7xl mx-auto">
                                <h2 className="text-lg font-semibold text-gray-900 mb-6">{searchResults.length} Results</h2>

                                {/* Filters */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {filterChips.map((chip, index) => (
                                            <button
                                                key={index}
                                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${chip.active
                                                    ? 'bg-blue-50 text-blue-600 flex items-center gap-2'
                                                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {chip.label}
                                                {chip.active && <FiX className="w-3 h-3" />}
                                            </button>
                                        ))}
                                        <button className="px-4 py-1.5 bg-[#0066FF] text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 ml-2">
                                            <FiFilter className="w-4 h-4" />
                                            Filter & Sort
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                                            New cars
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                                            Used cars
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                                            Lease cars
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                                            Sell your car
                                        </label>
                                    </div>
                                </div>

                                {/* Results Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {searchResults.map((car) => (
                                        <CarCard key={car.id} car={car} />
                                    ))}
                                    {searchResults.length === 0 && (
                                        <div className="col-span-full text-center py-12 text-gray-500">
                                            No cars found matching "{searchQuery}"
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            // Default Dashboard View
                            <div className="max-w-7xl mx-auto">
                                {/* Welcome Section */}
                                <div className="mb-8">
                                    <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                                        Welcome back, {user?.firstName || 'User'}
                                    </h1>
                                    <p className="text-sm text-gray-500">Here's a quick look at your car journey today...</p>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                                    {stats.map((stat, index) => {
                                        const Icon = stat.icon;
                                        return (
                                            <div key={index} className="bg-[#F9FAFB] rounded-xl border border-gray-200 p-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <Icon className="w-5 h-5 text-gray-400" />
                                                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                                        {stat.label}
                                                    </span>
                                                </div>
                                                <div className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Your Last Comparison */}
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Your last Comparison</h2>

                                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {comparisonCars.map((car) => (
                                                <div key={car.id} className="bg-[#F9FAFB] rounded-xl border border-gray-200 overflow-hidden">
                                                    <div className="aspect-[16/10] bg-gray-100 relative">
                                                        <img
                                                            src={car.image}
                                                            alt={`${car.brand} ${car.model}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    <div className="p-5">
                                                        <div className="flex justify-between items-start mb-6">
                                                            <div>
                                                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{car.brand}</h3>
                                                                <p className="text-sm font-medium text-gray-600">{car.model}</p>
                                                                <p className="text-xs text-gray-400 mt-1">{car.variant}</p>
                                                            </div>
                                                            <div className="text-xl font-bold text-gray-900">{car.price}</div>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Purchase & Finance</span>
                                                                <span className="text-sm font-semibold text-gray-900">{car.purchasePrice}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Running Cost</span>
                                                                <span className="text-sm font-semibold text-gray-900">{car.runningCost}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Finance Type</span>
                                                                <span className="text-sm font-semibold text-gray-900">{car.financeType}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Fuel</span>
                                                                <span className="text-sm font-semibold text-gray-900">{car.fuel}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Insurance</span>
                                                                <span className="text-sm font-semibold text-gray-900">{car.insurance}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center pt-2">
                                                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Maintenance</span>
                                                                <span className="text-sm font-semibold text-gray-900">{car.maintenance}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </ProtectedRoute>
    );
}
