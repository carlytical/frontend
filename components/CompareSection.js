import { FaGasPump, FaShieldAlt, FaWrench, FaLock, FaFileContract } from 'react-icons/fa';
import Link from 'next/link';

export default function CompareSection() {
    const cars = [
        {
            id: '1',
            name: 'Ford Ranger (2021)',
            image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2070&auto=format&fit=crop',
            price: '£26,500',
            specs: [
                { label: 'Fuel', value: '£200 / month', icon: <FaGasPump className="w-4 h-4" /> },
                { label: 'Insurance', value: '£100 / month', icon: <FaShieldAlt className="w-4 h-4" /> },
                { label: 'Maintenance', value: '£50 / month', icon: <FaWrench className="w-4 h-4" /> },
                { label: 'Security', value: '£30 / month', icon: <FaLock className="w-4 h-4" /> },
                { label: 'Warranty', value: '£40 / month', icon: <FaFileContract className="w-4 h-4" /> },
            ]
        },
        {
            id: '2',
            name: 'Audi Q5 Sportback (2023)',
            image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
            price: '£42,950',
            specs: [
                { label: 'Fuel', value: '£180 / month', icon: <FaGasPump className="w-4 h-4" /> },
                { label: 'Insurance', value: '£120 / month', icon: <FaShieldAlt className="w-4 h-4" /> },
                { label: 'Maintenance', value: '£60 / month', icon: <FaWrench className="w-4 h-4" /> },
                { label: 'Security', value: '£40 / month', icon: <FaLock className="w-4 h-4" /> },
                { label: 'Warranty', value: '£55 / month', icon: <FaFileContract className="w-4 h-4" /> },
            ]
        },
        {
            id: '3',
            name: 'Mercedes-Benz C-Class (2022)',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
            price: '£38,200',
            specs: [
                { label: 'Fuel', value: '£190 / month', icon: <FaGasPump className="w-4 h-4" /> },
                { label: 'Insurance', value: '£150 / month', icon: <FaShieldAlt className="w-4 h-4" /> },
                { label: 'Maintenance', value: '£70 / month', icon: <FaWrench className="w-4 h-4" /> },
                { label: 'Security', value: '£45 / month', icon: <FaLock className="w-4 h-4" /> },
                { label: 'Warranty', value: '£50 / month', icon: <FaFileContract className="w-4 h-4" /> },
            ]
        }
    ];

    return (
        <section className="py-20 bg-white" id="compare">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Compare Before You Commit.
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        See the full cost of ownership side-by-side – fuel, insurance, tax, warranty,
                        and more – for every car you're considering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cars.map((car, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="mb-4">
                                <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Model</span>
                                <h3 className="text-xl font-bold text-gray-900 mt-1">{car.name}</h3>
                            </div>

                            <div className="aspect-[16/10] mb-6 rounded-lg overflow-hidden bg-gray-900">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>

                            <div className="flex justify-end mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                    <span className="text-sm text-gray-500">Yearly</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {car.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between text-sm items-center">
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span className="text-brand-blue">{spec.icon}</span>
                                            <span>{spec.label}</span>
                                        </div>
                                        <span className="font-medium text-gray-900">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <span className="text-2xl font-bold text-gray-900">{car.price}</span>
                                <Link
                                    href={`/car/${car.id}`}
                                    className="px-6 py-2.5 bg-[#0066FF] text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-500/20"
                                >
                                    More details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
