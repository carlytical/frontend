'use client';
import { useState } from 'react';
import { FaTimes, FaFilter } from 'react-icons/fa';

export default function FilterBar() {
    const [activeFilters, setActiveFilters] = useState([
        { id: 1, label: 'Abarth', type: 'make' },
        { id: 2, label: '124 Spider', type: 'model' },
        { id: 3, label: 'Up to 2025', type: 'year' },
    ]);

    const [carType, setCarType] = useState('new');

    const removeFilter = (id) => {
        setActiveFilters(activeFilters.filter(f => f.id !== id));
    };

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="container-custom py-6">
                {/* Filter Badges and Button - Right Aligned */}
                <div className="flex items-center justify-end gap-3 mb-4 flex-wrap">
                    {activeFilters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => removeFilter(filter.id)}
                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-blue-100 transition-colors"
                        >
                            {filter.label}
                            <FaTimes className="w-3 h-3" />
                        </button>
                    ))}
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        Price
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        Mileage
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        Location
                    </button>
                    <button className="px-6 py-2 bg-[#0066FF] text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors">
                        <FaFilter className="w-4 h-4" />
                        Filter & Sort
                    </button>
                </div>

                {/* Car Type Toggles */}
                <div className="flex items-center justify-end gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={carType === 'new'}
                            onChange={() => setCarType('new')}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">New cars</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={carType === 'used'}
                            onChange={() => setCarType('used')}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Used cars</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={carType === 'lease'}
                            onChange={() => setCarType('lease')}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Lease cars</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={carType === 'sell'}
                            onChange={() => setCarType('sell')}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Sell your car</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
