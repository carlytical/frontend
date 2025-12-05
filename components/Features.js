import { FaStar, FaArrowRight } from 'react-icons/fa';

export default function Features() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom mb-24 text-center">
                <div className="flex justify-center mb-4">
                    <FaStar className="w-8 h-8 text-brand-blue" />
                </div>
                <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-3 block">Features</span>
                <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Key Features</h2>
                <p className="text-gray-600 mt-6 text-lg">What makes us stand out as the one stop shop for everything automobile</p>
            </div>

            <div className="space-y-40">
                {/* Feature 1 */}
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-square rounded-full overflow-hidden relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
                                    alt="Off-road capability"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-40 h-40 bg-brand-orange rounded-full flex flex-col items-center justify-center text-white shadow-xl z-20">
                                <span className="font-bold text-sm tracking-widest">TRANSPARENT</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pl-10">
                            <span className="text-sm font-medium text-gray-500 mb-3 block">True Cost of Ownership</span>
                            <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                See the full picture – fuel, <br />
                                tax, finance, insurance, and <br />
                                maintenance – before you <br />
                                buy.
                            </h3>
                            <button className="flex items-center gap-3 text-sm font-bold text-gray-500 hover:text-brand-orange transition-colors group">
                                LEARN MORE
                                <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FaArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-20">
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-square rounded-full overflow-hidden border-8 border-gray-50">
                                <img
                                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop"
                                    alt="Comparison"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg z-20">
                                <span className="text-sm tracking-widest">COMPARE</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-10">
                            <span className="text-sm font-medium text-gray-500 mb-3 block">Comprehensive Comparison</span>
                            <h3 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                Lease, PCP, or Hire Purchase <br />
                                - compare which option fits <br />
                                your lifestyle and budget best.
                            </h3>
                            <button className="flex items-center gap-3 text-sm font-bold text-gray-500 hover:text-brand-blue transition-colors group">
                                LEARN MORE
                                <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FaArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
