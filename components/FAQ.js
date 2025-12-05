'use client';
import { useState } from 'react';

import { FaMagic, FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What makes Carlytic different from other car sites?",
            answer: "Carlytic provides a comprehensive Total Cost of Ownership analysis, including hidden costs like insurance, fuel, and maintenance, which most other sites ignore."
        },
        {
            question: "Can you help me choose between purchasing and leasing?",
            answer: "Absolutely! Our comparison tools allow you to see the long-term financial impact of both options side-by-side."
        },
        {
            question: "Do you inspect the cars before listing?",
            answer: "Yes, all vehicles listed on our platform undergo a rigorous inspection process to ensure quality and safety."
        },
        {
            question: "Is there a fee for using Carlytic?",
            answer: "Carlytic is free for buyers to use. We may earn a commission from dealers or lenders, but this does not affect the price you pay."
        },
        {
            question: "Can I sell my car through Carlytic?",
            answer: "Currently we focus on helping buyers find their perfect car, but we are working on a selling platform for the future."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-blue text-2xl mb-2 flex justify-center"><FaMagic /></span>
                    <span className="text-brand-blue font-medium mb-2 block">FAQ</span>
                    <h2 className="text-4xl font-bold text-gray-900">Your Questions, Answered.</h2>
                    <p className="text-gray-600 mt-4">Common questions we answer often.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <FaChevronDown
                                    className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
