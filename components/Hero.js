'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaList, FaMapMarkerAlt, FaCar, FaCarSide, FaChevronDown, FaSearch } from 'react-icons/fa';

export default function Hero() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState({ make: '', model: '' });
    const [selectedValues, setSelectedValues] = useState({
        category: 'Category',
        postcode: 'Postcode',
        make: 'Make',
        model: 'Model'
    });

    const dropdowns = {
        category: ['Search cars', 'Sell cars', 'Value your car', 'Lease cars'],
        postcode: ['SW1A 1AA', 'SW1A 2AA', 'E1 6AN', 'W1A 0AX', 'EC1A 1BB', 'N1 9AG'],
        make: ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia']
    };

    const makeToModels = {
        'Toyota': ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Prius', 'Tacoma', 'Tundra'],
        'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V', 'Odyssey', 'Ridgeline'],
        'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Edge', 'Ranger', 'Bronco'],
        'BMW': ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', 'M3', 'M5'],
        'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'GLS', 'A-Class'],
        'Audi': ['A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
        'Volkswagen': ['Golf', 'Jetta', 'Passat', 'Tiguan', 'Atlas', 'Arteon', 'ID.4'],
        'Nissan': ['Altima', 'Maxima', 'Sentra', 'Rogue', 'Pathfinder', 'Frontier', 'Titan'],
        'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Kona', 'Ioniq 5'],
        'Kia': ['Forte', 'Optima', 'Sportage', 'Sorento', 'Telluride', 'Soul', 'EV6']
    };

    const getFilteredMakes = () => {
        if (!searchQuery.make) return dropdowns.make;
        return dropdowns.make.filter(make =>
            make.toLowerCase().includes(searchQuery.make.toLowerCase())
        );
    };

    const getAvailableModels = () => {
        let models = [];
        if (selectedValues.make && selectedValues.make !== 'Make' && makeToModels[selectedValues.make]) {
            models = makeToModels[selectedValues.make];
        } else {
            return ['Select a make first'];
        }

        if (!searchQuery.model) return models;
        return models.filter(model =>
            model.toLowerCase().includes(searchQuery.model.toLowerCase())
        );
    };

    const handleSelect = (type, value) => {
        setSelectedValues(prev => {
            const newValues = { ...prev, [type]: value };
            // Reset model when make changes
            if (type === 'make') {
                newValues.model = 'Model';
            }
            return newValues;
        });
        setSearchQuery({ make: '', model: '' }); // Reset search queries
        setOpenDropdown(null);
    };

    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container-custom relative z-20  pb-12 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        One stop solution for your next car
                    </h1>

                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        See the true cost of owning your next car. From costs,
                        financing, and insurance before you buy and make
                        every decision with confidence.
                    </p>

                    <div className="flex gap-4 justify-center mb-12">
                        <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
                            Support <span className="text-lg">↗</span>
                        </button>
                        <Link href="/browse" className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Browse Cars
                        </Link>
                    </div>

                    {/* Inline Search Filter Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-3 max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-3 items-center">
                            {/* Category Dropdown */}
                            <div className="relative flex-1 min-w-[150px]">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaList className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 text-left min-w-0">
                                        <div className="text-xs text-gray-500">Category</div>
                                        <div className="text-sm font-medium text-gray-900 truncate">{selectedValues.category}</div>
                                    </div>
                                    <FaChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
                                </button>
                                {openDropdown === 'category' && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                        {dropdowns.category.map((item) => (
                                            <button
                                                key={item}
                                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                onClick={() => handleSelect('category', item)}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Post code Dropdown */}
                            <div className="relative flex-1 min-w-[150px]">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'postcode' ? null : 'postcode')}
                                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 text-left min-w-0">
                                        <div className="text-xs text-gray-500">Post code</div>
                                        <div className="text-sm font-medium text-gray-900 truncate">{selectedValues.postcode}</div>
                                    </div>
                                    <FaChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
                                </button>
                                {openDropdown === 'postcode' && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                        {dropdowns.postcode.map((item) => (
                                            <button
                                                key={item}
                                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                onClick={() => handleSelect('postcode', item)}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Make Dropdown */}
                            <div className="relative flex-1 min-w-[150px]">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'make' ? null : 'make')}
                                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaCar className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 text-left min-w-0">
                                        <div className="text-xs text-gray-500">Make</div>
                                        <div className="text-sm font-medium text-gray-900 truncate">{selectedValues.make}</div>
                                    </div>
                                    <FaChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
                                </button>
                                {openDropdown === 'make' && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-48 overflow-hidden flex flex-col">
                                        <div className="p-2 border-b border-gray-200">
                                            <input
                                                type="text"
                                                placeholder="Search make..."
                                                value={searchQuery.make}
                                                onChange={(e) => setSearchQuery(prev => ({ ...prev, make: e.target.value }))}
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="overflow-y-auto max-h-40">
                                            {getFilteredMakes().length > 0 ? (
                                                getFilteredMakes().map((item) => (
                                                    <button
                                                        key={item}
                                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                        onClick={() => handleSelect('make', item)}
                                                    >
                                                        {item}
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Model Dropdown */}
                            <div className="relative flex-1 min-w-[150px]">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === 'model' ? null : 'model')}
                                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaCarSide className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 text-left min-w-0">
                                        <div className="text-xs text-gray-500">Model</div>
                                        <div className="text-sm font-medium text-gray-900 truncate">{selectedValues.model}</div>
                                    </div>
                                    <FaChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
                                </button>
                                {openDropdown === 'model' && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-48 overflow-hidden flex flex-col">
                                        <div className="p-2 border-b border-gray-200">
                                            <input
                                                type="text"
                                                placeholder="Search model..."
                                                value={searchQuery.model}
                                                onChange={(e) => setSearchQuery(prev => ({ ...prev, model: e.target.value }))}
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="overflow-y-auto max-h-40">
                                            {getAvailableModels().length > 0 ? (
                                                getAvailableModels().map((item) => (
                                                    <button
                                                        key={item}
                                                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                        onClick={() => handleSelect('model', item)}
                                                        disabled={item === 'Select a make first'}
                                                    >
                                                        {item}
                                                    </button>
                                                ))
                                            ) : (
                                                <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Search Button */}
                            <Link href="/search" className="px-8 py-3 bg-[#0066FF] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 flex-shrink-0">
                                <FaSearch className="w-5 h-5" />
                                Search Cars
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
