'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function SpecsAccordion({ specs }) {
    const [openSection, setOpenSection] = useState('exterior');

    const sections = [
        { id: 'exterior', title: 'Exterior', items: specs.exterior },
        { id: 'interior', title: 'Interior', items: specs.interior },
        { id: 'performance', title: 'Performance', items: specs.performance },
        { id: 'dimensions', title: 'Size & Dimension', items: specs.dimensions },
    ];

    return (
        <div className="space-y-3">
            {sections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-medium text-gray-900">{section.title}</span>
                        <FaChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform ${openSection === section.id ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    {openSection === section.id && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <ul className="space-y-2">
                                {section.items.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
