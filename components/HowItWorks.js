import { FaSearch, FaBalanceScale, FaCheckCircle, FaClipboardCheck } from 'react-icons/fa';

export default function HowItWorks() {
    const steps = [
        {
            number: '01.',
            title: 'Search for Your Dream Car',
            description: 'Explore thousands of verified new and used cars tailored to your budget and preferences',
            icon: <FaSearch className="w-6 h-6 text-brand-blue" />,
            bg: 'bg-blue-50'
        },
        {
            number: '02.',
            title: 'Compare True Ownership Costs',
            description: 'See the full financial picture; fuel, insurance, maintenance, and more before you commit',
            icon: <FaBalanceScale className="w-6 h-6 text-brand-blue" />,
            bg: 'bg-cyan-50'
        },
        {
            number: '03.',
            title: 'Choose the best deal',
            description: 'Evaluate leasing, PCP, or hire purchase options backed by transparent data insights.',
            icon: <FaCheckCircle className="w-6 h-6 text-brand-orange" />,
            bg: 'bg-orange-50'
        },
        {
            number: '04.',
            title: 'Buy & Manage easily',
            description: 'Upload your documents, secure your purchase, and track delivery — all from one dashboard.',
            icon: <FaClipboardCheck className="w-6 h-6 text-green-600" />,
            bg: 'bg-green-50'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="mb-20">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        How it works
                    </h2>
                    <p className="text-xl text-gray-500">
                        Get started in these 4 easy steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-gray-50/50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100">
                            <span className="text-4xl font-medium text-gray-300 mb-12 block font-mono">
                                {step.number}
                            </span>

                            <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                {step.icon}
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
